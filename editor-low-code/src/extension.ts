import * as vscode from 'vscode';
import { main,formulario } from './pages/webview';
import { SendEmailWithRobot } from './utils/send_email_class';


export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('editor-low-code.start', () => {
		
			const panel = vscode.window.createWebviewPanel(
				'start',
				'Home',
				vscode.ViewColumn.One,
				{
					enableScripts: true
				}
			);
			
			// Chama a funcão com o html para exibir na extensão
			panel.webview.html = main();
	
	
			panel.webview.onDidReceiveMessage(
				async (message) => {
					if (message.command === 'goToHome') {
						panel.webview.html = main();
	
					}
					else if (message.command === 'openSendEmailForm') {
						panel.webview.html = formulario();
					} else if (message.command === 'sendEmail') {
						await sendEmail(message.email, message.subject, message.body,context.extensionPath);
						panel.webview.postMessage({ command: 'response', text: 'Email enviado com sucesso!' });
					}
				},
				undefined,
				context.subscriptions
			);
			
			
	
		})
	);
}

async function sendEmail(to: string, subject: string, text: string, extensionPath: string) {
   

    const emailSender = new SendEmailWithRobot();

    try {
        emailSender.runSendEmail(to, subject, text, extensionPath);
    } catch (error) {
        console.error('Erro ao enviar email:', error);
    }
}


// This method is called when your extension is deactivated
export function deactivate() {}
