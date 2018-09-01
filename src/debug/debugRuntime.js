"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const events = require("events");

class gmlRuntime extends events.EventEmitter {
    constructor() {
        this.currentLine = 0;
        this.breakPoints = new Map();
        this.breakPointid = 1;
    }

    get sourceFile() {
        return this.sourceFile;
    }

    start(program, stioOnEntry) {
        this.loadSource(program);
        this.currentLine = 1;
        this.verifyBreakpoints(this.sourceFile);
        if (stopOnEntry) {
            this.step(false, "stopOnEntry");
        }
        else {
            this.continue();
        }
    }
    continue(reverse = false) {
        this.run(reverse, undefined);
    }
    step(reverse = false, event = "stopOnStep") {
        this.run(reverse, event);
    }
    stack(stackFrame, endFrame) {
        const words = this.sourceLines[this.currentLine].trim().split(/\s+/);
        const frames = new Array();
        for (let i = startFrame; i < Math.min(endFrame, words.length); i++) {
            const name = words[i];
            frames.push({
                index: i,
                name: `${name}(${i})`,
                file: this.sourceFile,
                line: this.currentLine
            });
        }
        return {
            frames: frames,
            count: words.length
        }
    }
    setBreakPoint(path, line) {
        const bp = { verified: false, line, id: this.breakpointId++ };
        let bps = this.breakPoints.get(path);
        if (!bps) {
            bps = new Array();
            this.breakPoints.set(path, bps);
        }
        bps.push(bp);
        this.verifyBreakpoints(path);
        return bp;
    }
    /*
     * Clear breakpoint in file with given line.
     */
    clearBreakPoint(path, line) {
        let bps = this.breakPoints.get(path);
        if (bps) {
            const index = bps.findIndex(bp => bp.line === line);
            if (index >= 0) {
                const bp = bps[index];
                bps.splice(index, 1);
                return bp;
            }
        }
        return undefined;
    }
    /*
     * Clear all breakpoints for file.
     */
    clearBreakpoints(path) {
        this.breakPoints.delete(path);
    }
    // private methods
    loadSource(file) {
        if (this.sourceFile !== file) {
            this.sourceFile = file;
            this.sourceLines = fs.readFileSync(this.sourceFile).toString().split('\n');
        }
    }
    /**
     * Run through the file.
     * If stepEvent is specified only run a single step and emit the stepEvent.
     */
    run(reverse = false, stepEvent) {
        if (reverse) {
            for (let ln = this.currentLine - 1; ln >= 0; ln--) {
                if (this.fireEventsForLine(ln, stepEvent)) {
                    this.currentLine = ln;
                    return;
                }
            }
            // no more lines: stop at first line
            this.currentLine = 0;
            this.sendEvent('stopOnEntry');
        }
        else {
            for (let ln = this.currentLine + 1; ln < this.sourceLines.length; ln++) {
                if (this.fireEventsForLine(ln, stepEvent)) {
                    this.currentLine = ln;
                    return true;
                }
            }
            // no more lines: run to end
            this.sendEvent('end');
        }
    }
    verifyBreakpoints(path) {
        let bps = this.breakPoints.get(path);
        if (bps) {
            this.loadSource(path);
            bps.forEach(bp => {
                if (!bp.verified && bp.line < this.sourceLines.length) {
                    const srcLine = this.sourceLines[bp.line].trim();
                    // if a line is empty or starts with '+' we don't allow to set a breakpoint but move the breakpoint down
                    if (srcLine.length === 0 || srcLine.indexOf('+') === 0) {
                        bp.line++;
                    }
                    // if a line starts with '-' we don't allow to set a breakpoint but move the breakpoint up
                    if (srcLine.indexOf('-') === 0) {
                        bp.line--;
                    }
                    // don't set 'verified' to true if the line contains the word 'lazy'
                    // in this case the breakpoint will be verified 'lazy' after hitting it once.
                    if (srcLine.indexOf('lazy') < 0) {
                        bp.verified = true;
                        this.sendEvent('breakpointValidated', bp);
                    }
                }
            });
        }
    }
    /**
     * Fire events if line has a breakpoint or the word 'exception' is found.
     * Returns true is execution needs to stop.
     */
    fireEventsForLine(ln, stepEvent) {
        const line = this.sourceLines[ln].trim();
        // if 'log(...)' found in source -> send argument to debug console
        const matches = /log\((.*)\)/.exec(line);
        if (matches && matches.length === 2) {
            this.sendEvent('output', matches[1], this.sourceFile, ln, matches.index);
        }
        // if word 'exception' found in source -> throw exception
        if (line.indexOf('exception') >= 0) {
            this.sendEvent('stopOnException');
            return true;
        }
        // is there a breakpoint?
        const breakpoints = this.breakPoints.get(this.sourceFile);
        if (breakpoints) {
            const bps = breakpoints.filter(bp => bp.line === ln);
            if (bps.length > 0) {
                // send 'stopped' event
                this.sendEvent('stopOnBreakpoint');
                // the following shows the use of 'breakpoint' events to update properties of a breakpoint in the UI
                // if breakpoint is not yet verified, verify it now and send a 'breakpoint' update event
                if (!bps[0].verified) {
                    bps[0].verified = true;
                    this.sendEvent('breakpointValidated', bps[0]);
                }
                return true;
            }
        }
        // non-empty line
        if (stepEvent && line.length > 0) {
            this.sendEvent(stepEvent);
            return true;
        }
        // nothing interesting found -> continue
        return false;
    }
    sendEvent(event, ...args) {
        setImmediate(_ => {
            this.emit(event, ...args);
        });
    }
}
exports.gmlRuntime = gmlRuntime;