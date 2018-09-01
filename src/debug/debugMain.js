"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_debugadapter = require("vscode-debugadapter");
const gmlRuntime = require("./debugRuntime");
const { Subject } = require('await-notify');

class gmlDebugSession extends vscode_debugadapter.LoggingDebugSession {
    constructor() {
        this.variableHandles = new vscode_debugadapter.Handles();
        this.configuationDone = new Subject();
        // this debugger uses zero-based lines and columns
        this.setDebuggerLinesStartAt1(false);
        this.setDebuggerColumnsStartAt1(false);
        this.runtime = new gmlRuntime.gmlRuntime();
        // setup event handlers
        this.runtime.on('stopOnEntry', () => {
            this.sendEvent(new vscode_debugadapter.StoppedEvent('entry', gmlDebugSession.THREAD_ID));
        });
        this.runtime.on('stopOnStep', () => {
            this.sendEvent(new vscode_debugadapter.StoppedEvent('step', gmlDebugSession.THREAD_ID));
        });
        this.runtime.on('stopOnBreakpoint', () => {
            this.sendEvent(new vscode_debugadapter.StoppedEvent('breakpoint', gmlDebugSession.THREAD_ID));
        });
        this.runtime.on('stopOnException', () => {
            this.sendEvent(new vscode_debugadapter.StoppedEvent('exception', gmlDebugSession.THREAD_ID));
        });
        this.runtime.on('breakpointValidated', (bp) => {
            this.sendEvent(new vscode_debugadapter.BreakpointEvent('changed', { verified: bp.verified, id: bp.id }));
        });
        this.runtime.on('output', (text, filePath, line, column) => {
            const e = new vscode_debugadapter.OutputEvent(`${text}\n`);
            e.body.source = this.createSource(filePath);
            e.body.line = this.convertDebuggerLineToClient(line);
            e.body.column = this.convertDebuggerColumnToClient(column);
            this.sendEvent(e);
        });
        this.runtime.on('end', () => {
            this.sendEvent(new vscode_debugadapter.TerminatedEvent());
        });
    }
    initializeRequest(response, args) {
        // build and return the capabilities of this debug adapter:
        response.body = response.body || {};
        // the adapter implements the configurationDoneRequest.
        response.body.supportsConfigurationDoneRequest = true;
        // make VS Code to use 'evaluate' when hovering over source
        response.body.supportsEvaluateForHovers = true;
        // make VS Code to show a 'step back' button
        response.body.supportsStepBack = true;
        this.sendResponse(response);
        // since this debug adapter can accept configuration requests like 'setBreakpoint' at any time,
        // we request them early by sending an 'initializeRequest' to the frontend.
        // The frontend will end the configuration sequence by calling 'configurationDone' request.
        this.sendEvent(new vscode_debugadapter.InitializedEvent());
    }
    /**
     * Called at the end of the configuration sequence.
     * Indicates that all breakpoints etc. have been sent to the DA and that the 'launch' can start.
     */
    configurationDoneRequest(response, args) {
        super.configurationDoneRequest(response, args);
        // notify the launchRequest that configuration has finished
        this._configurationDone.notify();
    }
    launchRequest(response, args) {
        return __awaiter(this, void 0, void 0, function* () {
            // make sure to 'Stop' the buffered logging if 'trace' is not set
            vscode_debugadapter.logger.setup(args.trace ? vscode_debugadapter.Logger.LogLevel.Verbose : vscode_debugadapter.Logger.LogLevel.Stop, false);
            // wait until configuration has finished (and configurationDoneRequest has been called)
            yield this._configurationDone.wait(1000);
            // start the program in the runtime
            this._runtime.start(args.program, !!args.stopOnEntry);
            this.sendResponse(response);
        });
    }
    setBreakPointsRequest(response, args) {
        const path = args.source.path;
        const clientLines = args.lines || [];
        // clear all breakpoints for this file
        this._runtime.clearBreakpoints(path);
        // set and verify breakpoint locations
        const actualBreakpoints = clientLines.map(l => {
            let { verified, line, id } = this._runtime.setBreakPoint(path, this.convertClientLineToDebugger(l));
            const bp = new vscode_debugadapter.Breakpoint(verified, this.convertDebuggerLineToClient(line));
            bp.id = id;
            return bp;
        });
        // send back the actual breakpoint positions
        response.body = {
            breakpoints: actualBreakpoints
        };
        this.sendResponse(response);
    }
    threadsRequest(response) {
        // runtime supports now threads so just return a default thread.
        response.body = {
            threads: [
                new vscode_debugadapter.Thread(gmlDebugSession.THREAD_ID, "thread 1")
            ]
        };
        this.sendResponse(response);
    }
    stackTraceRequest(response, args) {
        const startFrame = typeof args.startFrame === 'number' ? args.startFrame : 0;
        const maxLevels = typeof args.levels === 'number' ? args.levels : 1000;
        const endFrame = startFrame + maxLevels;
        const stk = this._runtime.stack(startFrame, endFrame);
        response.body = {
            stackFrames: stk.frames.map(f => new vscode_debugadapter.StackFrame(f.index, f.name, this.createSource(f.file), this.convertDebuggerLineToClient(f.line))),
            totalFrames: stk.count
        };
        this.sendResponse(response);
    }
    scopesRequest(response, args) {
        const frameReference = args.frameId;
        const scopes = new Array();
        scopes.push(new vscode_debugadapter.Scope("Local", this._variableHandles.create("local_" + frameReference), false));
        scopes.push(new vscode_debugadapter.Scope("Global", this._variableHandles.create("global_" + frameReference), true));
        response.body = {
            scopes: scopes
        };
        this.sendResponse(response);
    }
    variablesRequest(response, args) {
        const variables = new Array();
        const id = this._variableHandles.get(args.variablesReference);
        if (id !== null) {
            variables.push({
                name: id + "_i",
                type: "integer",
                value: "123",
                variablesReference: 0
            });
            variables.push({
                name: id + "_f",
                type: "float",
                value: "3.14",
                variablesReference: 0
            });
            variables.push({
                name: id + "_s",
                type: "string",
                value: "hello world",
                variablesReference: 0
            });
            variables.push({
                name: id + "_o",
                type: "object",
                value: "Object",
                variablesReference: this._variableHandles.create("object_")
            });
        }
        response.body = {
            variables: variables
        };
        this.sendResponse(response);
    }
    continueRequest(response, args) {
        this._runtime.continue();
        this.sendResponse(response);
    }
    reverseContinueRequest(response, args) {
        this._runtime.continue(true);
        this.sendResponse(response);
    }
    nextRequest(response, args) {
        this._runtime.step();
        this.sendResponse(response);
    }
    stepBackRequest(response, args) {
        this._runtime.step(true);
        this.sendResponse(response);
    }
    evaluateRequest(response, args) {
        let reply = undefined;
        if (args.context === 'repl') {
            // 'evaluate' supports to create and delete breakpoints from the 'repl':
            const matches = /new +([0-9]+)/.exec(args.expression);
            if (matches && matches.length === 2) {
                const mbp = this._runtime.setBreakPoint(this._runtime.sourceFile, this.convertClientLineToDebugger(parseInt(matches[1])));
                const bp = new vscode_debugadapter.Breakpoint(mbp.verified, this.convertDebuggerLineToClient(mbp.line), undefined, this.createSource(this._runtime.sourceFile));
                bp.id = mbp.id;
                this.sendEvent(new vscode_debugadapter.BreakpointEvent('new', bp));
                reply = `breakpoint created`;
            }
            else {
                const matches = /del +([0-9]+)/.exec(args.expression);
                if (matches && matches.length === 2) {
                    const mbp = this._runtime.clearBreakPoint(this._runtime.sourceFile, this.convertClientLineToDebugger(parseInt(matches[1])));
                    if (mbp) {
                        const bp = new vscode_debugadapter.Breakpoint(false);
                        bp.id = mbp.id;
                        this.sendEvent(new vscode_debugadapter.BreakpointEvent('removed', bp));
                        reply = `breakpoint deleted`;
                    }
                }
            }
        }
        response.body = {
            result: reply ? reply : `evaluate(context: '${args.context}', '${args.expression}')`,
            variablesReference: 0
        };
        this.sendResponse(response);
    }
    createSource(filePath) {
        return new vscode_debugadapter.Source(path_1.basename(filePath), this.convertDebuggerPathToClient(filePath), undefined, undefined, 'gml-adapter-data');
    }
}
gmlDebugSession.THREAD_ID = 1;
exports.gmlDebugSession = gmlDebugSession