import * as vscode from 'vscode';
import { main,form_sendEmail } from './pages/webview';
import { SendEmailWithRobot } from './utils/send_email_class';
import { robotKeywords } from './robot/keywords';


export function activate(context: vscode.ExtensionContext) {
	let panel: vscode.WebviewPanel | undefined;

	context.subscriptions.push(
		vscode.commands.registerCommand('editor-low-code.start', () => {
		
			panel = vscode.window.createWebviewPanel(
				'start',
				'Editor Low Code',
				vscode.ViewColumn.One,
				{
					enableScripts: true
				}
			);
			
			// Chama a função com o html para exibir a tela inicial
			panel.webview.html = main();
	
	
			panel.webview.onDidReceiveMessage(
				async (message) => {
					if (message.command === 'goToHome') {
						panel!.webview.html = main();
					}
					else if(message.command === 'openFilterEmailForm'){
						panel!.webview.html = form_FiltrarEmails();
					}
					else if(message.command === 'openAcessarSMTPForm'){
						panel!.webview.html = form_acessarSMTP();
					}
					else if(message.command === 'openColetarDataAtualForm'){
						panel!.webview.html = form_ColetarDataAtual();
					}
					else if(message.command === 'openCopiarArquivoForm'){
						// panel!.webview.html = main();
					}
					else if(message.command === 'openMoverArquivoForm'){
						// panel!.webview.html = main();
					}
					else if(message.command === 'openCriarArquivoForm'){
						panel!.webview.html = form_CriarArquivo();
					}
					else if(message.command === 'openLerArquivoForm'){
						// panel!.webview.html = main();
					}
					else if(message.command === 'openExecutPythonForm'){
						panel!.webview.html = form_ExecutarExpressaoPython();
					}
					else if(message.command === 'openAbrirNavegadorForm'){
						// panel!.webview.html = main();
					}
					else if(message.command === 'openInserirTextoForm'){
						// panel!.webview.html = main();
					}
					else if(message.command === 'openColetarTextoForm'){
						// panel!.webview.html = main();
					}
					else if(message.command === 'openClicarElementoForm'){
						panel!.webview.html = form_ClicarNoElemento();
					}
					else if(message.command === 'openEsperarElementoForm'){
						panel!.webview.html = form_EsperarElemento();
					}
					else if(message.command === 'openSelecionarArquivoForm'){
						panel!.webview.html = form_SelecionarArquivo();
					}
					else if(message.command === 'openColetarElementosForm'){
						// panel!.webview.html = main();
					}
					else if(message.command === 'openIrParaForm'){
						// panel!.webview.html = main();
					}
					else if(message.command === 'openVoltarParaForm'){
						// panel!.webview.html = main();
					}
					else if (message.command === 'openSendEmailForm') {
						panel!.webview.html = form_sendEmail();
					} else if (message.command === 'modal_sendEmail') {
						// função para abrir o modal, deve se passado como 1º parâmetro a chave correspondente ao código robot que será exibido, presente na variável 'robotKeywords' 
						await Modal("Enviar E-mail",panel!);
						panel!.webview.postMessage({ command: 'response', text: 'Código gerado' });
					}
				},
				undefined,
				context.subscriptions
			);
			
			
	
		})
	);
}


async function Modal(keyword:string,panel: vscode.WebviewPanel) {
    const keywordData = robotKeywords[keyword]; 
    const keywordCode = keywordData.code; // Pega o código da keyword


    // Envia uma mensagem para o webview exibir o modal com o código da keyword
    panel.webview.postMessage({
        command: 'showModal',
        code: keywordCode // Passa o código da keyword para ser exibido no modal
    });
	
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
