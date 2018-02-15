'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_1 = require("vscode");
var gmlGlobals = require("./gmlGlobals");
var GMLHoverProvider = (function () {
    function GMLHoverProvider() {
    }
    GMLHoverProvider.prototype.provideHover = function (document, position, _token) {
        let enable = vscode_1.workspace.getConfiguration('gml-gm81' || 'gml-gms' || 'gml-gm2').get('suggest.basic', true);
        if (!enable) {
            return undefined;
        }
        var wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return undefined;
        }
        var name = document.getText(wordRange);
        var entry = gmlGlobals.globalfunctions[name] || gmlGlobals.constants[name] || gmlGlobals.globalvariables[name] || gmlGlobals.keywords[name];
        return undefined;
    };
    return GMLHoverProvider;
}());
exports.default = GMLHoverProvider;