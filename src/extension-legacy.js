/*jshint esversion: 6 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const hoverProvider = require("./gml/hoverProvider");
const completionProvider = require("./gml/completionProvider");
const signatureProvider = require("./gml/signatureProvider");
function activate(context) {
    //For opened file
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'file', language: 'gml-gm81' }, new hoverProvider.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'file', language: 'gml-gms' }, new hoverProvider.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'file', language: 'gml-gms2' }, new hoverProvider.default()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'gml-gm81' }, new completionProvider.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'gml-gms' }, new completionProvider.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'gml-gms2' }, new completionProvider.default(), '.'));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'file', language: 'gml-gm81' }, new signatureProvider.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'file', language: 'gml-gms' }, new signatureProvider.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'file', language: 'gml-gms2' }, new signatureProvider.default(), '(', ','));

    //For untitled file
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'untitled', language: 'gml-gm81' }, new hoverProvider.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'untitled', language: 'gml-gms' }, new hoverProvider.default()));
    context.subscriptions.push(vscode.languages.registerHoverProvider({ scheme: 'untitled', language: 'gml-gms2' }, new hoverProvider.default()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'untitled', language: 'gml-gm81' }, new completionProvider.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'untitled', language: 'gml-gms' }, new completionProvider.default(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'untitled', language: 'gml-gms2' }, new completionProvider.default(), '.'));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'untitled', language: 'gml-gm81' }, new signatureProvider.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'untitled', language: 'gml-gms' }, new signatureProvider.default(), '(', ','));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider({ scheme: 'untitled', language: 'gml-gms2' }, new signatureProvider.default(), '(', ','));
}
exports.activate = activate;