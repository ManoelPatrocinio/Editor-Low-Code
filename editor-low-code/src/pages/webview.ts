import * as vscode from 'vscode';

export function main(): string {
    
 
    return `

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body,html{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                min-height:100vh

            }
            .bg-custom-dark {
                background-color: #1d212a;
            }

            .mx-0 {
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
            a{
                color: #fff;
                text-decoration: none;  
            }
        </style>
      
        <div class="w-100 h-100 d-flex row bg-custom-dark mx-0">
            <nav class="col-3 border-end vh-100">
                <a class="w-100 d-block bg-success text-light fw-medium text-center py-2 mt-3 mb-4 rounded" href="#" id="home">
                    Editor Low Code
                </a>
                <ul class="w-100  ps-3">
                    <li class="mb-3">

                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse" href="#collapseSendEmails"
                            role="button" aria-expanded="false" aria-controls="collapseSendEmails">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z" fill="#CCCCCC"/>
                            </svg>
                        E-mail
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSendEmails">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="sendSimpleEmail">
                                    Envio de E-mail simples
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">Envio para um destinátario</small>
                                </a>
                            </li>
                            <li>
                                <a class="w-100 text-light " href="#" id="sendMultipleEmail">
                                    Envio de E-mail multiplos
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">envio para multiplos destinátarios</small>
                                </a>
                            </li>
                        </ul>
                        

                    
                    </div>

                    <li >

                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse" href="#collapseReadFiles"
                            role="button" aria-expanded="false" aria-controls="collapseReadFiles">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z" fill="#CCCCCC"/>
                            </svg>
                            Leitura de arquivo
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2  " id="collapseReadFiles">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#">
                                    Arquivo de planilha
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">arquivos .xlsx, .ods</small>
                                </a>
                            </li>
                            <li>
                                <a class="w-100 text-light " href="#">
                                    Arquivo de texto
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">arquivos .txt, .doc</small>
                                </a>
                            </li>
                        </ul>
                        

                    
                    </div>
                    
                </ul>
            </nav>
            <main class="col-9 d-flex justify-content-center text-center align-items-center">
                <div>
                    <h1 class="w-100 text-success"> Seja Bem-Vindo</h1>
                    <h3 class="w-100 text-success"> Extensão Low Code</h3>
                </div>
            </main>
        </div>
        

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
            integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
            crossorigin="anonymous"></script>

        <script>
            const vscode = acquireVsCodeApi();
            
            const welcomeLink = document.getElementById('home');
            const sendEmailLink = document.getElementById('sendSimpleEmail');
            const sendMultipleEmailsLink = document.getElementById('sendMultipleEmailsLink');

            welcomeLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'goToHome' });
            });

            sendEmailLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'openSendEmailForm' });
            });

            sendMultipleEmailsLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'openSendMultipleEmailsForm' });
            });
        </script>
       
    `;
}

export function formulario(): string {
    return `
      
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body,html{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                min-height:100vh

            }
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
                    
            .mx-0 {
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
            a{
                color: #fff;
                text-decoration: none;  
            }
        </style>
        
        <div class="row vw-100 vh-100 bg-custom-dark mx-0" >
            <nav class="col-3 border-end vh-100">
                <a class="w-100 d-block bg-success text-light fw-medium text-center py-2 mt-3 mb-4 rounded" href="#" id="home">
                    Editor Low Code
                </a>
                <ul class="w-100  ps-3">
                    <li class="mb-3">

                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse" href="#collapseSendEmails"
                            role="button" aria-expanded="false" aria-controls="collapseSendEmails">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z" fill="#CCCCCC"/>
                            </svg>
                        E-mail
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSendEmails">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="sendSimpleEmail">
                                    Envio de E-mail simple
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">Envio para um destinátario</small>
                                </a>
                            </li>
                            <li>
                                <a class="w-100 text-light " href="#" id="sendMultipleEmail">
                                    Envio de E-mail multiplos
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">envio para multiplos destinátarios</small>
                                </a>
                            </li>
                        </ul>
                        

                    
                    </div>

                    <li >

                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse" href="#collapseReadFiles"
                            role="button" aria-expanded="false" aria-controls="collapseReadFiles">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z" fill="#CCCCCC"/>
                            </svg>
                            Leitura de arquivo
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2  " id="collapseReadFiles">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#">
                                    Arquivo de planilha
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">arquivos .xlsx, .ods</small>
                                </a>
                            </li>
                            <li>
                                <a class="w-100 text-light " href="#">
                                    Arquivo de texto
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">arquivos .txt, .doc</small>
                                </a>
                            </li>
                        </ul>
                        

                    
                    </div>
                    
                </ul>
            </nav>
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
                                <button type="submit" class="btn btn-success px-5">Enviar</button>
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
            // Logica para navegação usando o menu lateral
            const welcomeLink = document.getElementById('home');
            const sendEmailLink = document.getElementById('sendSimpleEmail');
            const sendMultipleEmailsLink = document.getElementById('sendMultipleEmailsLink');

            welcomeLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'goToHome' });
            });

            sendEmailLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'openSendEmailForm' });
            });

            sendMultipleEmailsLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'openSendMultipleEmailsForm' });
            });
        </script>
                
        
    `;
}
import * as vscode from 'vscode';

export function main(): string {
    
 
    return `

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body,html{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                min-height:100vh

            }
            .bg-custom-dark {
                background-color: #1d212a;
            }

            .mx-0 {
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
            a{
                color: #fff;
                text-decoration: none;  
            }
        </style>
      
        <div class="w-100 h-100 d-flex row bg-custom-dark mx-0">
            <nav class="col-3 border-end vh-100">
                <a class="w-100 d-block bg-success text-light fw-medium text-center py-2 mt-3 mb-4 rounded" href="#" id="home">
                    Editor Low Code
                </a>
                <ul class="w-100  ps-3">
                    <li class="mb-3">

                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse" href="#collapseSendEmails"
                            role="button" aria-expanded="false" aria-controls="collapseSendEmails">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z" fill="#CCCCCC"/>
                            </svg>
                        E-mail
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSendEmails">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="sendSimpleEmail">
                                    Envio de E-mail simple
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">Envio para um destinátario</small>
                                </a>
                            </li>
                            <li>
                                <a class="w-100 text-light " href="#" id="sendMultipleEmail">
                                    Envio de E-mail multiplos
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">envio para multiplos destinátarios</small>
                                </a>
                            </li>
                        </ul>
                        

                    
                    </div>

                    <li >

                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse" href="#collapseReadFiles"
                            role="button" aria-expanded="false" aria-controls="collapseReadFiles">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z" fill="#CCCCCC"/>
                            </svg>
                            Leitura de arquivo
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2  " id="collapseReadFiles">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#">
                                    Arquivo de planilha
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">arquivos .xlsx, .ods</small>
                                </a>
                            </li>
                            <li>
                                <a class="w-100 text-light " href="#">
                                    Arquivo de texto
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">arquivos .txt, .doc</small>
                                </a>
                            </li>
                        </ul>
                        

                    
                    </div>
                    
                </ul>
            </nav>
            <main class="col-9 d-flex justify-content-center text-center align-items-center">
                <div>
                    <h1 class="w-100 text-success"> Seja Bem Vindo</h1>
                    <h3 class="w-100 text-success"> Extensão Low Code</h3>
                </div>
            </main>
        </div>
        

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
            integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
            crossorigin="anonymous"></script>

        <script>
            const vscode = acquireVsCodeApi();
            
            const welcomeLink = document.getElementById('home');
            const sendEmailLink = document.getElementById('sendSimpleEmail');
            const sendMultipleEmailsLink = document.getElementById('sendMultipleEmailsLink');

            welcomeLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'goToHome' });
            });

            sendEmailLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'openSendEmailForm' });
            });

            sendMultipleEmailsLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'openSendMultipleEmailsForm' });
            });
        </script>
       
    `;
}

export function formulario(): string {
    return `
      
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body,html{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                min-height:100vh

            }
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
                    
            .mx-0 {
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
            a{
                color: #fff;
                text-decoration: none;  
            }
        </style>
        
        <div class="row vw-100 vh-100 bg-custom-dark mx-0" >
            <nav class="col-3 border-end vh-100">
                <a class="w-100 d-block bg-success text-light fw-medium text-center py-2 mt-3 mb-4 rounded" href="#" id="home">
                    Editor Low Code
                </a>
                <ul class="w-100  ps-3">
                    <li class="mb-3">

                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse" href="#collapseSendEmails"
                            role="button" aria-expanded="false" aria-controls="collapseSendEmails">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z" fill="#CCCCCC"/>
                            </svg>
                        E-mail
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSendEmails">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="sendSimpleEmail">
                                    Envio de E-mail simple
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">Envio para um destinátario</small>
                                </a>
                            </li>
                            <li>
                                <a class="w-100 text-light " href="#" id="sendMultipleEmail">
                                    Envio de E-mail multiplos
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">envio para multiplos destinátarios</small>
                                </a>
                            </li>
                        </ul>
                        

                    
                    </div>

                    <li >

                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse" href="#collapseReadFiles"
                            role="button" aria-expanded="false" aria-controls="collapseReadFiles">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z" fill="#CCCCCC"/>
                            </svg>
                            Leitura de arquivo
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2  " id="collapseReadFiles">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#">
                                    Arquivo de planilha
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">arquivos .xlsx, .ods</small>
                                </a>
                            </li>
                            <li>
                                <a class="w-100 text-light " href="#">
                                    Arquivo de texto
                                    <br />
                                    <small  class="ps-2" style="color: #cecece;">arquivos .txt, .doc</small>
                                </a>
                            </li>
                        </ul>
                        

                    
                    </div>
                    
                </ul>
            </nav>
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
                                <button type="submit" class="btn btn-success px-5">Enviar</button>
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
            // Logica para navegação usando o menu lateral
            const welcomeLink = document.getElementById('home');
            const sendEmailLink = document.getElementById('sendSimpleEmail');
            const sendMultipleEmailsLink = document.getElementById('sendMultipleEmailsLink');

            welcomeLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'goToHome' });
            });

            sendEmailLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'openSendEmailForm' });
            });

            sendMultipleEmailsLink.addEventListener('click', () => {
                vscode.postMessage({ command: 'openSendMultipleEmailsForm' });
            });
        </script>
                
        
    `;
}