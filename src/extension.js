'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const hoverProvider_1 = require("./gml/hoverProvider");
const completionProvider_1 = require("./gml/completionProvider");
const signatureProvider_1 = require("./gml/signatureProvider");
function activate(context) {
    context.subscriptions.push(vscode.languages.registerHoverProvider('gml-gm81', new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider('gml-gms', new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider('gml-gms2', new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('gml-gm81', new completionProvider_1.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('gml-gms', new completionProvider_1.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('gml-gms2', new completionProvider_1.default(), '.'));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('gml-gm81', new signatureProvider_1.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('gml-gms', new signatureProvider_1.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('gml-gms2', new signatureProvider_1.default(), '(', ','));
}
exports.activate = activate;