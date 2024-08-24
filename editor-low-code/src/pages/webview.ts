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
                    
                <div class="w-100 h-100 d-flex row">
        <nav class="col-3 border-end vh-100">
            <div class="sidebar">
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-center">Editor Low Code</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <a href="#" data-toggle="collapse" data-target="#email">
                                    <i class="fa fa-check"></i> E-mail
                                </a>
                            </li>
                            <div id="email" class="collapse">
                                <li class="list-group-item">
                                    <a href="#">Envio de E-mail simples</a>
                                    <p class="text-muted">envio para um destinatário</p>
                                    <div class="drop_area" id="email_simple_drop_area"></div>
                                </li>
                                <li class="list-group-item">
                                    <a href="#">Envio de E-mail múltiplos</a>
                                    <p class="text-muted">envio para múltiplos destinatários</p>
                                    <div class="drop_area" id="email_multiple_drop_area"></div>
                                </li>
                            </div>
                            <li class="list-group-item">
                                <a href="#" data-toggle="collapse" data-target="#arquivo">
                                    <i class="fa fa-check"></i> Leitura de Arquivo
                                </a>
                            </li>
                            <div id="arquivo" class="collapse">
                                <li class="list-group-item">
                                    <a href="#">Arquivo de planilha</a>
                                    <p class="text-muted">arquivos .xlsx, .ods</p>
                                    <div class="drop_area" id="file_spreadsheet_drop_area"></div>
                                </li>
                                <li class="list-group-item">
                                    <a href="#">Arquivo de texto</a>
                                    <p class="text-muted">arquivos .txt, .doc</p>
                                    <div class="drop_area" id="file_text_drop_area"></div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">


    <style>
        
        body {
          background-color: #1D212A;
          color: #fff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          height: 100vh;
          margin: 0;
          display: flex;
        }
      
        .sidebar {
          width: 250px;
          background-color: #1D212A;
          padding-top: 20px;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
        }
      
        .sidebar .card {
          background-color: #1D212A;
          border: none;
          box-shadow: 0 4px 8px rgba(20, 19, 19, 0.1);
        }
      
        .sidebar .card-header {
          background-color: #159A3AD4;
          color: #fff;
          border-bottom: none;
        }
      
        .sidebar .list-group-item {
          background-color: #1D212A;
          border: none;
          color: #fff;
        }
      
        .sidebar .list-group-item:hover {
          background-color: #495057;
        }
      
        .sidebar .list-group-item a {
          color: #fff;
          text-decoration: none;
        }
      
        .sidebar .list-group-item a:hover {
          text-decoration: underline;
        }
      
        .content {
          margin-left: 250px;
          padding: 20px;
          flex: 1;
        }
      
        .drop_area {
          border: 2px dashed #ccc;
          border-radius: 4px;
          padding: 20px;
          text-align: center;
          color: #100f0f;
          font-size: 16px;
          height: 100px;
          opacity: 0;
          background-color: transparent;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          margin: 0;
        }
      
        .drop_area.dragover {
          border-color: #007bff;
          background-color: rgba(201, 206, 210, 0.1);
          color: #fff;
          opacity: 1;
        }
      
        #email_multiple_drop_area, #email_simple_drop_area, #file_spreadsheet_drop_area, #file_text_drop_area {
          background-color: #fff;
          color: #333;
        }
      
        #email_multiple_drop_area:hover, #email_simple_drop_area:hover, #file_spreadsheet_drop_area:hover, #file_text_drop_area:hover {
          background-color: #f5f5f5;
          color: #333;
        }

        * {
            color: #fff;
            text-decoration: none;
            text-shadow: none;
          }
      </style>
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


