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
            <title>Extensão Low Code</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container mt-5">
               <form>
               </form>
            </div>  
             
        </body>
        </html>
    `;
}


