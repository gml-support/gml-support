'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const gmlGlobals = require("./gmlGlobals");
const GMLHoverProvider = ((() => {
    class GMLHoverProvider {
        provideHover(document, position, token) {
            let enable = vscode_1.workspace.getConfiguration('gml-gm81' || 'gml-gms' || 'gml-gms2').get('suggest.basic', true);
            if (!enable) {
                return undefined;
            }
            const wordRange = document.getWordRangeAtPosition(position);
            if (!wordRange) {
                return undefined;
            }
            const name = document.getText(wordRange);
            let backchar = '';
            if (wordRange.start.character > 0) {
                let backidx = wordRange.start.translate({ characterDelta: -1 });
                backchar = backidx.character < 0 ? '' : document.getText(new vscode_1.Range(backidx, wordRange.start));
            }
            const availability = "GM Language Availability: ";
            const entry = gmlGlobals.globalfunctions[name];
            if (entry && entry.description && entry.available) {
                const signature = entry.signature;
                const contents = [];
                contents.push(new vscode_1.MarkdownString(signature));
                contents.push(new vscode_1.MarkdownString(availability + entry.available + "\n\n[Function]" + entry.description));
                return new vscode_1.Hover(contents, wordRange);
            }
            entry = gmlGlobals.constants[name];
            if (entry && entry.description && entry.available) {
                const signature = entry.signature;
                const contents = [];
                contents.push(new vscode_1.MarkdownString(signature));
                contents.push(new vscode_1.MarkdownString(availability + entry.available + "\n\n[Constant]" + entry.description));
                return new vscode_1.Hover(contents, wordRange);
            }
            entry = gmlGlobals.globalvariables[name];
            if (entry && entry.description && entry.available) {
                const signature = entry.signature;
                const contents = [];
                contents.push(new vscode_1.MarkdownString(signature));
                contents.push(new vscode_1.MarkdownString(availability + entry.available + "\n\n[Variable]" + entry.description));
                return new vscode_1.Hover(contents, wordRange);
            }
            entry = gmlGlobals.keywords[name];
            if (entry && entry.description && entry.available) {
                const signature = entry.signature;
                const contents = [];
                contents.push(new vscode_1.MarkdownString(signature));
                contents.push(new vscode_1.MarkdownString(availability + entry.available + "\n\n[Keyword]" + entry.description));
                return new vscode_1.Hover(contents, wordRange);
            }
            return undefined;
        }
    }

    return GMLHoverProvider;
})());
exports.default = GMLHoverProvider;