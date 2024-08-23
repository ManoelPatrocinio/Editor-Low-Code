import * as vscode from 'vscode';
import { main,formulario } from './pages/webview';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "editor-low-code" is now active!');


	const disposable = vscode.commands.registerCommand('editor-low-code.helloWorld', () => {
		
		vscode.window.showInformationMessage('Hello World from editor-low-code!');
	});

	const disposable2 = vscode.commands.registerCommand('editor-low-code.start', () => {
		
		const panel = vscode.window.createWebviewPanel(
			'start',
			'Titulo da Pagina',
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);
		
		// chama a funcão com o html para exibir na extensão
		panel.webview.html = main();
		
		

	});


	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() {}
