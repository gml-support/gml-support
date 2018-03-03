'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const gmlGlobals = require("./gmlGlobals");
const gmlThirdparty = require("./gmlThirdparty");
function textToMarkedString(text) {
    return text.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
}
exports.textToMarkedString = textToMarkedString;
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
            const entry = gmlGlobals.globalfunctions[name] || gmlGlobals.constants[name] || gmlGlobals.globalvariables[name] || gmlGlobals.keywords[name] || gmlThirdparty.thirdfunctions[name] || gmlThirdparty.thirdconstants[name];
            if (entry && entry.description) {
                const signature = entry.signature;
                //const signature = name;
                //const contents = [textToMarkedString(entry.description)];
                const contents = [];
                contents.push(new vscode_1.MarkdownString(signature));
                contents.push(textToMarkedString(entry.description));
                return new vscode_1.Hover(contents, wordRange);
            }
            return undefined;
        }
    }

    return GMLHoverProvider;
})());
exports.default = GMLHoverProvider;