'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const hoverProvider_1 = require("./gml/hoverProvider");
const completionProvider_1 = require("./gml/completionProvider");
const signatureProvider_1 = require("./gml/signatureProvider");
//const gmlDebugger = require("./debug/debugMain")
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
    /*
    const gmlProvider = new gmlConfigurationProvider();
    context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider("gml-gms2", gmlProvider))
    context.subscriptions.push(gmlProvider);
    */
}
exports.activate = activate;
/*
class gmlConfigurationProvider {
    resolveDebugConfiguration(folder, config, token) {
        // if launch.json is missing or empty
        if (!config.type && !config.request && !config.name) {
            const editor = vscode.window.activeTextEditor;
            if (editor && editor.document.languageId === 'gml-gms2') {
                config.type = 'gml-gms2';
                config.name = 'Game Launch (GameMaker Studio 2)';
                config.request = 'launch';
                config.program = 'rubber .';
                config.stopOnEntry = true;
            }
        }
        if (!config.program) {
            return vscode.window.showInformationMessage("Cannot find rubber!").then(_ => {
                return undefined; // abort launch
            });
        }
        if (EMBED_DEBUG_ADAPTER) {
            // start port listener on launch of first debug session
            if (!this._server) {
                // start listening on a random port
                this._server = Net.createServer(socket => {
                    const session = new gmlDebugger.gmlDebugSession();
                    session.setRunAsServer(true);
                    session.start(socket, socket);
                }).listen(0);
            }
            // make VS Code connect to debug server instead of launching debug adapter
            config.debugServer = this._server.address().port;
        }
        return config;
    }
    dispose() {
        if (this._server) {
            this._server.close();
        }
    }
}
*/