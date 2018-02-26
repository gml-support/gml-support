'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const gmlGlobals = require("./gmlGlobals");
class GMLCompletionItemProvider {
    constructor() {
        this.triggerCharacters = ['.'];
    }
    provideCompletionItems(document, position, token) {
        let result = [];
        let enable = vscode_1.workspace.getConfiguration('gml-gm81' || 'gml-gms' || 'gml-gm2').get('suggest.basic', true);
        if (!enable) {
            return Promise.resolve(result);
        }
        var range = document.getWordRangeAtPosition(position);
        var prefix = range ? document.getText(range) : '';
        if (!range) {
            range = new vscode_1.Range(position, position);
        }
        var added = {};
        var createNewProposal = function (kind, name, entry, type) {
            var proposal = new vscode_1.CompletionItem(name);
            proposal.kind = kind;
            if (entry) {
                if (entry.description) {
                    proposal.documentation = entry.description;
                }
                if (entry.parameters) {
                    let signature = type ? '(' + type + ') ' : '';
                    signature += name;
                    signature += '(';
                    if (entry.parameters && entry.parameters.length != 0) {
                        let params = '';
                        entry.parameters.forEach(p => params += p.label + ',');
                        signature += params.slice(0, -1);
                    }
                    signature += ')';
                    proposal.detail = signature;
                }
            }
            return proposal;
        };
        var matches = (name) => {
            return prefix.length === 0 || name.length >= prefix.length && name.substr(0, prefix.length) === prefix;
        };
        for (var globalvariables in gmlGlobals.globalvariables) {
            if (gmlGlobals.globalvariables.hasOwnProperty(globalvariables) && matches(globalvariables)) {
                added[globalvariables] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, globalvariables, gmlGlobals.globalvariables[globalvariables]));
            }
        }
        for (var globalfunctions in gmlGlobals.globalfunctions) {
            if (gmlGlobals.globalfunctions.hasOwnProperty(globalfunctions) && matches(globalfunctions)) {
                added[globalfunctions] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, globalfunctions, gmlGlobals.globalfunctions[globalfunctions]));
            }
        }
        for (var constants in gmlGlobals.constants) {
            if (gmlGlobals.constants.hasOwnProperty(constants) && matches(constants)) {
                added[constants] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Field, constants, gmlGlobals.constants[constants]));
            }
        }
        for (var keywords in gmlGlobals.keywords) {
            if (gmlGlobals.keywords.hasOwnProperty(keywords) && matches(keywords)) {
                added[keywords] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Keyword, keywords, gmlGlobals.keywords[keywords]));
            }
        }
        for (var thirdfunctions in gmlThirdparty.thirdfunctions) {
            if (gmlThirdparty.thirdfunctions.hasOwnProperty(thirdfunctions) && matches(thirdfunctions)) {
                added[thirdfunctions] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, thirdfunctions, gmlThirdparty.thirdfunctions[thirdfunctions]));
            }
        }
        var text = document.getText();
        var functionMatch = /^\w+\s+([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)\s*\(/mg;
        var match = null;
        while (match = functionMatch.exec(text)) {
            var word = match[1];
            if (!added[word]) {
                added[word] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, word, null));
            }
        }
        return Promise.resolve(result);
    }
}
exports.default = GMLCompletionItemProvider;