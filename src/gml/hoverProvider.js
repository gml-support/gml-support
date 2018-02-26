'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const gmlGlobals = require("./gmlGlobals");
const gmlThirdparty = require("./gmlThirdparty");
const GMLHoverProvider = ((() => {
    class GMLHoverProvider {
        provideHover(document, position, _token) {
            let enable = vscode_1.workspace.getConfiguration('gml-gm81' || 'gml-gms' || 'gml-gms2').get('suggest.basic', true);
            if (!enable) {
                return undefined;
            }
            const wordRange = document.getWordRangeAtPosition(position);
            if (!wordRange) {
                return undefined;
            }
            const name = document.getText(wordRange);
            const entry = gmlGlobals.globalfunctions[name] || gmlGlobals.constants[name] || gmlGlobals.globalvariables[name] || gmlGlobals.keywords[name] || gmlThirdparty.thirdfunctions[name];
            return undefined;
        }
    }

    return GMLHoverProvider;
})());
exports.default = GMLHoverProvider;