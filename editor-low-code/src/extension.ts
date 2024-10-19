import * as vscode from "vscode";

import {
  main,
  form_sendEmail,
  form_ClicarNoElemento,
  form_ColetarDataAtual,
  form_CriarArquivo,
  form_EsperarElemento,
  form_FiltrarEmails,
  form_SelecionarArquivo,
  form_acessarSMTP,
  form_ExecutarExpressaoPython,
  form_InserirTexto,
  form_VoltarPara,
  form_IrPara,
} from "./pages/webview";
import { robotKeywords } from "./robot/keywords";

export function activate(context: vscode.ExtensionContext) {
  let panel: vscode.WebviewPanel | undefined;

  context.subscriptions.push(
    vscode.commands.registerCommand("editor-low-code.start", () => {
      panel = vscode.window.createWebviewPanel(
        "start",
        "Editor Low Code",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );
      // Chama a função com o html para exibir a tela inicial
      panel.webview.html = main();

      panel.webview.onDidReceiveMessage(
        async (message) => {
          if (message.command === "goToHome") {
            panel!.webview.html = main();
          } else if (message.command === "openFilterEmailForm") {
            panel!.webview.html = form_FiltrarEmails();
          } else if (message.command === "openAcessarSMTPForm") {
            panel!.webview.html = form_acessarSMTP();
          } else if (message.command === "openColetarDataAtualForm") {
            panel!.webview.html = form_ColetarDataAtual();
          } else if (message.command === "openCopiarArquivoForm") {
            // panel!.webview.html = main();
          } else if (message.command === "openMoverArquivoForm") {
            // panel!.webview.html = main();
          } else if (message.command === "openCriarArquivoForm") {
            panel!.webview.html = form_CriarArquivo();
          } else if (message.command === "openLerArquivoForm") {
            // panel!.webview.html = main();
          } else if (message.command === "openExecutPythonForm") {
            panel!.webview.html = form_ExecutarExpressaoPython();
          } else if (message.command === "openAbrirNavegadorForm") {
            // panel!.webview.html = main();
          } else if (message.command === "openInserirTextoForm") {
            panel!.webview.html = form_InserirTexto();
          } else if (message.command === "openColetarTextoForm") {
            // panel!.webview.html = main();
          } else if (message.command === "openClicarElementoForm") {
            panel!.webview.html = form_ClicarNoElemento();
          } else if (message.command === "openEsperarElementoForm") {
            panel!.webview.html = form_EsperarElemento();
          } else if (message.command === "openSelecionarArquivoForm") {
            panel!.webview.html = form_SelecionarArquivo();
          } else if (message.command === "openColetarElementosForm") {
            // panel!.webview.html = main();
          } else if (message.command === "openIrParaForm") {
            panel!.webview.html = form_IrPara();
          } else if (message.command === "openVoltarParaForm") {
			await Modal("Voltar Para", panel!);
          } else if (message.command === "openSendEmailForm") {
            panel!.webview.html = form_sendEmail();
          } else if (message.command === "modal_sendEmail") {
            await Modal("Enviar E-mail", panel!);
          } else if (message.command === "modal_acessoSMTP") {
            await Modal("Acessar SMTP", panel!);
          } else if (message.command === "modal_clickelement") {
            await Modal("Clicar no Elemento", panel!);
          } else if (message.command === "modal_express") {
            await Modal("Executar Expressao Python", panel!);
          } else if (message.command === "modal_createfile") {
            await Modal("Criar Arquivo", panel!);
          } else if (message.command === "modal_esperarelemento") {
            await Modal("Esperar Elemento", panel!);
          } else if (message.command === "modal_selecionararquivo") {
            await Modal("Selecionar Arquivo", panel!);
          } else if (message.command === "modal_filtraremails") {
            await Modal("Filtrar E-mails", panel!);
          } else if (message.command === "modal_coletardata") {
            await Modal("Coletar Data Atual", panel!);
          } else if (message.command === "modal_inserirtexto") {
            await Modal("Inserir Texto", panel!);
          } else if (message.command === "modal_irpara") {
            await Modal("Ir Para", panel!);
          } else if (message.command === "modal_voltarpara") {
            await Modal("Voltar Para", panel!);
          }
        },
        undefined,
        context.subscriptions
      );
    })
  );
}

async function Modal(keyword: string, panel: vscode.WebviewPanel) {
  const keywordData = robotKeywords[keyword];
  const keywordCode = keywordData.code; // Pega o código da keyword

  // Envia uma mensagem para o webview exibir o modal com o código da keyword
  panel.webview.postMessage({
    command: "showModal",
    code: keywordCode, // Passa o código da keyword para ser exibido no modal
  });
}
// This method is called when your extension is deactivated
export function deactivate() {}
