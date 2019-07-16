/*jshint esversion: 6 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const LanguageClient = require("vscode-languageclient");
function activate(context) {
    let serverModule = context.asAbsolutePath(path.join('node_modules', 'gml-tools-langserver', 'out', 'main.js'));
    let debugOptions = { execArgv: ['--nolazy', '--inspect=15685'] };
    let serverOptions = {
        run: { module: serverModule, transport: LanguageClient.TransportKind.ipc },
        debug: { module: serverModule, transport: LanguageClient.TransportKind.ipc, options: debugOptions }
    };
    let clientOptions = {
        documentSelector: [
            {
                scheme: 'file',
                language: [
                    'gml-gms',
                    'gml-gms2'
                ]
            }
        ],
        synchronize: {
            // Synchronize the setting section 'language server' to the server
            configurationSection: 'gmlTools',
            // Notify the server about file changes to '.clientrc files contain in the workspace
            fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
        }
    };
    let client = new LanguageClient.LanguageClient('gmlTools', 'GML Language Server', serverOptions, clientOptions);
    client.onReady().then(async () => {
        client.onNotification('GotoURI', async () => {
            const thisURI = await vscode.Uri.file(path);
            await vscode.window.showTextDocument(thisURI);
        });
        client.onRequest('importManual', async () => {
            const ourManual = await vscode.window.showOpenDialog({
                openLabel: 'GMS2 Program Folder',
                canSelectFiles: false,
                canSelectFolders: true,
                canSelectMany: false
            });
            if (ourManual) {
                return ourManual[0].fsPath;
            }
            else
                return null;
        });
        client.onRequest('requestImportManual', async () => {
            const location = await vscode.window.showInformationMessage('GMS2 Manual not found at "~/Program Folder/GameMaker Studio 2". Please specify location of the "GameMaker Studio 2" program folder.', 'Okay', 'Import later');
            return location;
        });
    })
};
exports.activate = activate;