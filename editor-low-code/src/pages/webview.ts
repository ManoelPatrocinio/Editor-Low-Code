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

        <style>
                .bg-custom-dark {
                    background-color: #1d212a;
                }
               .mx-0 {
                    margin-left: 0 !important;
                    margin-right: 0 !important;
               }
        </style>

        </head>
        <body>
            <div class="w-100 h-100 d-flex row bg-custom-dark mx-0">
                <nav class="col-3 border-end  vh-100">
                    <ul>
                       <li class="text-light">Opções do menu: ${valor}</li> 
                       <li class="text-light">Opções do menu: ${params}</li> 
                    </ul>
                </nav>
                <main class="col-9 d-flex justify-content-center text-center align-items-center">
                    <div>     
                        <h1 class="w-100 text-success"> Seja Bem Vindo</h1>
                        <h3 class="w-100 text-success"> Extensão Low Code</h3>
                    </div>
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

            <style>
                .bg-custom-dark {
                    background-color: #1d212a;
                }
                .form-control {
                background-color: #46444C; 
                color: white;              
                border: 1px solid #46444c; 
                }
                .form-control::placeholder {
                    color: white;   
                    opacity: 1;
                }
            </style>
        </head>
        <body>

            <div class="row vh-100 bg-custom-dark" >
                <div class="col-3 sidebar">
                
                </div>
                <div class="col-9 content d-flex justify-content-center align-items-center ">
                    <div class="card w-75 bg-custom-dark border border-light rounded" >
                        <h5 class="card-header text-center bg-success text-light rounded-top py-2">Send SMTP email message</h5>
                        <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
                            
                        
                            <h6 class="w-100 card-header bg-success text-light rounded-top py-2">Destinatário:</h6>
                            <form id="emailForm" class="w-100 p-4">
                                <div class="mb-3 row align-items-center">
                                    <label for="email" class="col-sm-3 col-form-label text-white">Email:</label>
                                    <div class="col-sm-9">
                                        <input type="email" class="form-control" id="email" placeholder="Digite o email" required>
                                    </div>
                                </div>
                                <div class="mb-3 row align-items-center">
                                    <label for="subject" class="col-sm-3 col-form-label text-white">Assunto:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="subject" placeholder="Digite o assunto" required>
                                    </div>
                                </div>
                                <div class="mb-3 row align-items-center">
                                    <label for="body" class="col-sm-3 col-form-label text-white">Corpo:</label>
                                    <div class="col-sm-9">
                                        <textarea class="form-control" id="body" rows="3" placeholder="Escreva sua mensagem aqui" required></textarea>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-success">Enviar</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

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

