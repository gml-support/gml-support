var vscode = require('vscode');

function activate(context) {
    var disposableInfo = vscode.commands.registerCommand('extension.gmlsupport.maizemusic.info', function () {
        vscode.window.showInformationMessage('如果你使用了MaizeMusic插件，函数用法，类型等相关内容请查阅：http://www.magecorn.com/docs/doc-view-52.shtml or https://wiki.liaronce.win/#/maizemusic');
    });
    context.subscriptions.push(disposableInfo);
}
exports.activate = activate;

function deactivate() { }
exports.deactivate = deactivate;