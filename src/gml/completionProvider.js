'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const localizationset = vscode_1.workspace.getConfiguration('gmlsupport').get('localization');
const gmlGlobals = require("./i18n/" + localizationset + "/gmlGlobals");
const gmlThirdparty = require("./i18n/" + localizationset + "/gmlThirdparty");
class GMLCompletionItemProvider {
    constructor() {
        this.triggerCharacters = ['.'];
    }
    provideCompletionItems(document, position) {
        let result = [];
        let enable = vscode_1.workspace.getConfiguration('gml-gm81' || 'gml-gms' || 'gml-gms2').get('suggest.basic', true);
        if (!enable) {
            return Promise.resolve(result);
        }
        let range = document.getWordRangeAtPosition(position);
        const prefix = range ? document.getText(range) : '';
        if (!range) {
            range = new vscode_1.Range(position, position);
        }
        const added = {};
        const createNewProposal = (kind, name, entry, type) => {
            const proposal = new vscode_1.CompletionItem(name);
            proposal.kind = kind;
            if (entry) {
                if (entry.description) {
                    let availability = "GM Language Availability: ";
                    proposal.documentation = availability + entry.available + " \n " + entry.description;
                }

                if (entry.signature) {
                    proposal.detail = entry.signature;
                }
                if (entry.parameters) {
                    let signature = type ? '(' + type + ')' : '';
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
        const matches = (name) => {
            return prefix.length === 0 || name.length >= prefix.length && name.substr(0, prefix.length) === prefix;
        };
        //Global
        for (const globalfunctions in gmlGlobals.globalfunctions) {
            if (gmlGlobals.globalfunctions.hasOwnProperty(globalfunctions) && matches(globalfunctions)) {
                added[globalfunctions] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, globalfunctions, gmlGlobals.globalfunctions[globalfunctions]));
            }
        }
        for (const deprecatedfunctions in gmlGlobals.deprecatedfunctions) {
            if (gmlGlobals.deprecatedfunctions.hasOwnProperty(deprecatedfunctions) && matches(deprecatedfunctions)) {
                added[deprecatedfunctions] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, deprecatedfunctions, gmlGlobals.deprecatedfunctions[deprecatedfunctions]));
            }
        }
        for (const obsoletefunctions1 in gmlGlobals.obsoletefunctions1) {
            if (gmlGlobals.obsoletefunctions1.hasOwnProperty(obsoletefunctions1) && matches(obsoletefunctions1)) {
                added[obsoletefunctions1] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, obsoletefunctions1, gmlGlobals.obsoletefunctions1[obsoletefunctions1]));
            }
        }
        for (const obsoletefunctions2 in gmlGlobals.obsoletefunctions2) {
            if (gmlGlobals.obsoletefunctions2.hasOwnProperty(obsoletefunctions2) && matches(obsoletefunctions2)) {
                added[obsoletefunctions2] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, obsoletefunctions2, gmlGlobals.obsoletefunctions2[obsoletefunctions2]));
            }
        }
        for (const gm81functions in gmlGlobals.gm81functions) {
            if (gmlGlobals.gm81functions.hasOwnProperty(gm81functions) && matches(gm81functions)) {
                added[gm81functions] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, gm81functions, gmlGlobals.gm81functions[gm81functions]));
            }
        }
        for (const gms2functions in gmlGlobals.gms2functions) {
            if (gmlGlobals.gms2functions.hasOwnProperty(gms2functions) && matches(gms2functions)) {
                added[gms2functions] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, gms2functions, gmlGlobals.gms2functions[gms2functions]));
            }
        }
        for (const obsoletevariables2 in gmlGlobals.obsoletevariables2) {
            if (gmlGlobals.obsoletevariables2.hasOwnProperty(obsoletevariables2) && matches(obsoletevariables2)) {
                added[obsoletevariables2] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, obsoletevariables2, gmlGlobals.obsoletevariables2[obsoletevariables2]));
            }
        }
        for (const globalvariables in gmlGlobals.globalvariables) {
            if (gmlGlobals.globalvariables.hasOwnProperty(globalvariables) && matches(globalvariables)) {
                added[globalvariables] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, globalvariables, gmlGlobals.globalvariables[globalvariables]));
            }
        }
        for (const gms2variables in gmlGlobals.gms2variables) {
            if (gmlGlobals.gms2variables.hasOwnProperty(gms2variables) && matches(gms2variables)) {
                added[gms2variables] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, gms2variables, gmlGlobals.gms2variables[gms2variables]));
            }
        }
        for (const constants in gmlGlobals.constants) {
            if (gmlGlobals.constants.hasOwnProperty(constants) && matches(constants)) {
                added[constants] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Constant, constants, gmlGlobals.constants[constants]));
            }
        }
        for (const gm81constants in gmlGlobals.gm81constants) {
            if (gmlGlobals.gm81constants.hasOwnProperty(gm81constants) && matches(gm81constants)) {
                added[gm81constants] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Constant, gm81constants, gmlGlobals.gm81constants[gm81constants]));
            }
        }
        for (const gms2constants in gmlGlobals.gms2constants) {
            if (gmlGlobals.gms2constants.hasOwnProperty(gms2constants) && matches(gms2constants)) {
                added[gms2constants] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Constant, gms2constants, gmlGlobals.gms2constants[gms2constants]));
            }
        }
        for (const keywords in gmlGlobals.keywords) {
            if (gmlGlobals.keywords.hasOwnProperty(keywords) && matches(keywords)) {
                added[keywords] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Keyword, keywords, gmlGlobals.keywords[keywords]));
            }
        }
        //Third-party
        for (const thirdfunctions in gmlThirdparty.thirdfunctions) {
            if (gmlThirdparty.thirdfunctions.hasOwnProperty(thirdfunctions) && matches(thirdfunctions)) {
                added[thirdfunctions] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, thirdfunctions, gmlThirdparty.thirdfunctions[thirdfunctions]));
            }
        }
        for (const thirdconstants in gmlThirdparty.thirdconstants) {
            if (gmlThirdparty.thirdconstants.hasOwnProperty(thirdconstants) && matches(thirdconstants)) {
                added[thirdconstants] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Field, thirdconstants, gmlThirdparty.thirdconstants[thirdconstants]));
            }
        }
        const text = document.getText();
        const functionMatch = /^\w+\s+([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)\s*\(/mg;
        let match = null;
        while (match = functionMatch.exec(text)) {
            const word = match[1];
            if (!added[word]) {
                added[word] = true;
                result.push(createNewProposal(vscode_1.CompletionItemKind.Function, word, null));
            }
        }
        return Promise.resolve(result);
    }
}
exports.default = GMLCompletionItemProvider;