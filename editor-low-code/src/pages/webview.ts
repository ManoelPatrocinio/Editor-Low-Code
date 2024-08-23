import * as vscode from 'vscode';

export function main(params?: string): string {
    const valor = 10;
    
    const EnviarEmail = ()=>{
        vscode.window.showInformationMessage('Programação não é só bug e dor de cabeça !');
    };
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Extensão Low Code</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="w-100 h-100 d-flex row">
                <nav class="col-3 border-end  vh-100">
                    <ul>
                       <li>Opções do menu: ${valor}</li> 
                       <li>Opções do menu: ${params}</li> 
                    </ul>
                </nav>
                <main class="col-9">
                    <h1 class="w-100"> Seja Bem Vindo</h1>
                    <h3 class="w-100"> Extensão Low Code</h3>
                </main>
            </div>  

        </body>
        </html>
    `;
}

export function formulario(): string {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviar Email</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>Enviar Email</h1>
        <form id="emailForm">
            <div class="mb-3">
                <label for="email" class="form-label">Para:</label>
                <input type="email" class="form-control" id="email" placeholder="Destinatário" required>
            </div>
            <div class="mb-3">
                <label for="subject" class="form-label">Assunto:</label>
                <input type="text" class="form-control" id="subject" placeholder="Titulo do e-mail" required>
            </div>
            <div class="mb-3">
                <label for="body" class="form-label">Corpo:</label>
                <textarea class="form-control" id="body" rows="3" placeholder="Sua mensagem" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        <div id="response" class="mt-3"></div>
    </div>
    <script>
        const vscode = acquireVsCodeApi();
        document.getElementById('emailForm').addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const body = document.getElementById('body').value;
            vscode.postMessage({ command: 'sendEmail', email, subject, body });
        });
    </script>
</body>
</html>
    `;
}