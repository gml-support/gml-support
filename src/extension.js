'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const hoverProvider_1 = require("./gml/hoverProvider");
const completionProvider_1 = require("./gml/completionProvider");
const signatureProvider_1 = require("./gml/signatureProvider");
function activate(context) {
    //For opened file
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'file', language: 'gml-gm81' }, new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'file', language: 'gml-gms' }, new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'file', language: 'gml-gms2' }, new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'gml-gm81' }, new completionProvider_1.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'gml-gms' }, new completionProvider_1.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'gml-gms2' }, new completionProvider_1.default(), '.'));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'file', language: 'gml-gm81' }, new signatureProvider_1.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'file', language: 'gml-gms' }, new signatureProvider_1.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'file', language: 'gml-gms2' }, new signatureProvider_1.default(), '(', ','));

    //For untitled file
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'untitled', language: 'gml-gm81' }, new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'untitled', language: 'gml-gms' }, new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'untitled', language: 'gml-gms2' }, new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'untitled', language: 'gml-gm81' }, new completionProvider_1.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'untitled', language: 'gml-gms' }, new completionProvider_1.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'untitled', language: 'gml-gms2' }, new completionProvider_1.default(), '.'));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'untitled', language: 'gml-gm81' }, new signatureProvider_1.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'untitled', language: 'gml-gms' }, new signatureProvider_1.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'untitled', language: 'gml-gms2' }, new signatureProvider_1.default(), '(', ','));
}
exports.activate = activate;