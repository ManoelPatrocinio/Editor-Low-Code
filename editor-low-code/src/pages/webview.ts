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
      
    <div class="w-100  min-vh-100 d-flex row bg-custom-dark mx-0">
        <nav class="col-3 border-end min-vh-100">
                <a class="w-100 d-block bg-success text-light fw-medium text-center py-2 mt-3 mb-4 rounded" href="#"
                    id="home">
                    Editor Low Code
                </a>
                <ul class="w-100  ps-3">
                    <li class="mb-3">
                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                            href="#collapseSendEmails" role="button" aria-expanded="false"
                            aria-controls="collapseSendEmails">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                    fill="#CCCCCC" />
                            </svg>
                            E-mail
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSendEmails">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="AcessarSMTP">
                                    Acessar SMTP
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="EnviarEmail">
                                    Enviar E-mail
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li>
                                <a class="w-100 text-light " href="#" id="FiltrarEmail">
                                    Filtrar E-mails
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                        </ul>



                    </div>



                    <li class="mb-3">
                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                            href="#collapseDateTime" role="button" aria-expanded="false" aria-controls="collapseDateTime">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                    fill="#CCCCCC" />
                            </svg>
                            DateTime
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseDateTime">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="ColetarDataAtual">
                                    Coletar Data Atual
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <li class="mb-3">
                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                            href="#collapseOperatingSystem" role="button" aria-expanded="false"
                            aria-controls="collapseOperatingSystem">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                    fill="#CCCCCC" />
                            </svg>
                            Operating System
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseOperatingSystem">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="CopiarArquivo">
                                    Copiar Arquivo
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="MoverArquivo">
                                    Mover Arquivo
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="CriarArquivo">
                                    Criar Arquivo
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="LerArquivo">
                                    Ler Arquivo
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <li class="mb-3">
                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                            href="#collapseBiultin" role="button" aria-expanded="false" aria-controls="collapseBiultin">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                    fill="#CCCCCC" />
                            </svg>
                            Biultin
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseBiultin">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="ExecutPython">
                                    Executar Expressão Python
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <li class="mb-3">
                        <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                            href="#collapseSelenium" role="button" aria-expanded="false" aria-controls="collapseSelenium">
                            <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                    fill="#CCCCCC" />
                            </svg>
                            Selenium
                        </a>
                    </li>
                    <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSelenium">
                        <ul class="w-100 h-100 ps-1">
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="AbrirNavegador">
                                    Abrir Navegador
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="ColetarTexto">
                                    Coletar Texto
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="InserirTexto">
                                    Inserir Texto
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="ClicarElemento">
                                    Clicar no Elemento
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="EsperarElemento">
                                    Esperar Elemento
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="SelecionarArquivo">
                                    Selecionar Arquivo <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="ColetarElementos">
                                    Coletar Quantidade de Elementos
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="IrPara">
                                    Ir Para
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                </a>
                            </li>
                            <li class="mb-3">
                                <a class="w-100 text-light mb-3" href="#" id="VoltarPara">
                                    Voltar Para
                                    <br />
                                    <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
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
            

            // Lógica para o evento de navegação entre pagina, através do menu lateral
            document.addEventListener('DOMContentLoaded', () => {
                const vscode = acquireVsCodeApi();

                const btnHome = document.getElementById('home');
                const btnSendEmail = document.getElementById('EnviarEmail');
                const btnFilterEmail = document.getElementById('FiltrarEmail');
                const btnAcessarSMTP = document.getElementById('AcessarSMTP');
                const btnColetarDataAtual = document.getElementById('ColetarDataAtual');
                const btnCopiarArquivo = document.getElementById('CopiarArquivo');
                const btnMoverArquivo = document.getElementById('MoverArquivo');
                const btnCriarArquivo = document.getElementById('CriarArquivo');

                const btnLerArquivo = document.getElementById('LerArquivo');
                const btnExecutPython = document.getElementById('ExecutPython');
                const btnAbrirNavegador = document.getElementById('AbrirNavegador');
                const btnInserirTexto = document.getElementById('InserirTexto');
                const btnColetarTexto = document.getElementById('ColetarTexto');
                const btnClicarElemento = document.getElementById('ClicarElemento');
                const btnEsperarElemento = document.getElementById('EsperarElemento');
                const btnSelecionarArquivo = document.getElementById('SelecionarArquivo');
                const btnColetarElementos = document.getElementById('ColetarElementos');
                const btnIrPara = document.getElementById('IrPara');
                const btnVoltarPara = document.getElementById('VoltarPara');

            
                if (btnHome) {
                    btnHome.addEventListener('click', () => {
                        vscode.postMessage({ command: 'goToHome' });
                    });
                }

                if (btnSendEmail) {
                    btnSendEmail.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openSendEmailForm' });
                    });
                }
                if (btnFilterEmail) {
                    btnFilterEmail.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openFilterEmailForm' });
                    });
                }
                if (btnAcessarSMTP) {
                    btnAcessarSMTP.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openAcessarSMTPForm' });
                    });
                }
                if (btnColetarDataAtual) {
                    btnColetarDataAtual.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openColetarDataAtualForm' });
                    });
                }
                if (btnCopiarArquivo) {
                    btnCopiarArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openCopiarArquivoForm' });
                    });
                }

                if (btnMoverArquivo) {
                    btnMoverArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openMoverArquivoForm' });
                    });
                }
                if (btnCriarArquivo) {
                    btnCriarArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openCriarArquivoForm' });
                    });
                }

                if (btnLerArquivo) {
                    btnLerArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openLerArquivoForm' });
                    });
                }

                if (btnExecutPython) {
                    btnExecutPython.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openExecutPythonForm' });
                    });
                }
                if (btnAbrirNavegador) {
                    btnAbrirNavegador.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openAbrirNavegadorForm' });
                    });
                }
                if (btnInserirTexto) {
                    btnInserirTexto.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openInserirTextoForm' });
                    });
                }
                if (btnColetarTexto) {
                    btnColetarTexto.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openColetarTextoForm' });
                    });
                }
                if (btnClicarElemento) {
                    btnClicarElemento.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openClicarElementoForm' });
                    });
                }
                if (btnEsperarElemento) {
                    btnEsperarElemento.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openEsperarElementoForm' });
                    });
                }
                if (btnSelecionarArquivo) {
                    btnSelecionarArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openSelecionarArquivoForm' });
                    });
                }
                if (ColetarElementos) {
                    btnColetarElementos.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openColetarElementosForm' });
                    });
                }
                if (btnIrPara) {
                    btnIrPara.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openIrParaForm' });
                    });
                }
                if (btnVoltarPara) {
                    btnVoltarPara.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openVoltarParaForm' });
                    });
                }
                    

            });
            

            
        </script>
       
    `;
}

export function form_sendEmail(): string {
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
        
        <div class="w-100  min-vh-100 d-flex row bg-custom-dark mx-0">
           <nav class="col-3 border-end min-vh-100">
                    <a class="w-100 d-block bg-success text-light fw-medium text-center py-2 mt-3 mb-4 rounded" href="#"
                        id="home">
                        Editor Low Code
                    </a>
                    <ul class="w-100  ps-3">
                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseSendEmails" role="button" aria-expanded="false"
                                aria-controls="collapseSendEmails">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                E-mail
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSendEmails">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="AcessarSMTP">
                                        Acessar SMTP
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="EnviarEmail">
                                        Enviar E-mail
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li>
                                    <a class="w-100 text-light " href="#" id="FiltrarEmail">
                                        Filtrar E-mails
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>



                        </div>



                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseDateTime" role="button" aria-expanded="false" aria-controls="collapseDateTime">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                DateTime
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseDateTime">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ColetarDataAtual">
                                        Coletar Data Atual
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseOperatingSystem" role="button" aria-expanded="false"
                                aria-controls="collapseOperatingSystem">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                Operating System
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseOperatingSystem">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="CopiarArquivo">
                                        Copiar Arquivo
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="MoverArquivo">
                                        Mover Arquivo
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="CriarArquivo">
                                        Criar Arquivo
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="LerArquivo">
                                        Ler Arquivo
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseBiultin" role="button" aria-expanded="false" aria-controls="collapseBiultin">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                Biultin
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseBiultin">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ExecutPython">
                                        Executar Expressão Python
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseSelenium" role="button" aria-expanded="false" aria-controls="collapseSelenium">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                Selenium
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSelenium">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="AbrirNavegador">
                                        Abrir Navegador
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ColetarTexto">
                                        Coletar Texto
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="InserirTexto">
                                        Inserir Texto
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ClicarElemento">
                                        Clicar no Elemento
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="EsperarElemento">
                                        Esperar Elemento
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="SelecionarArquivo">
                                        Selecionar Arquivo <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ColetarElementos">
                                        Coletar Quantidade de Elementos
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="IrPara">
                                        Ir Para
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="VoltarPara">
                                        Voltar Para
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </ul>
                              
                </nav>
            <!-- Fim Menu lateral  -->

            <!-- Início do Formulário - Envio de Email -->

            <div class="col-9 content d-flex justify-content-center align-items-center ">
                <div class="card w-75 bg-custom-dark border border-light rounded" >
                    <h5 class="card-header text-center bg-success text-light rounded-top py-2">Send SMTP email message</h5>
                    <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
                        
                    
                        <h6 class="w-100 card-header bg-success text-light rounded-top py-2">Destinatário:</h6>
                        <form id="emailForm" class="w-100 p-4">
                            <div class="mb-3 row align-items-center">
                                <label for="email" class="col-sm-3 col-form-label text-white">Email:</label>
                                <div class="col-sm-9">
                                    <input type="email" class="form-control" id="email" placeholder="Digite o email">
                                </div>
                            </div>
                            <div class="mb-3 row align-items-center">
                                <label for="subject" class="col-sm-3 col-form-label text-white">Assunto:</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" id="subject" placeholder="Digite o assunto">
                                </div>
                            </div>
                            <div class="mb-3 row align-items-center">
                                <label for="body" class="col-sm-3 col-form-label text-white">Corpo:</label>
                                <div class="col-sm-9">
                                    <textarea class="form-control" id="body" rows="3" placeholder="Escreva sua mensagem aqui"></textarea>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-success px-5">See Code</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>

            <!-- Fim do Formulário - Envio de Email -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

        <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="robotModalLabel">Código Robot</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                </div>
            </div>
        </div> 
        
        <!-- Fim do Modal - Mostrar Código robot -->
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

        <script>
            const vscode = acquireVsCodeApi();

            // Lógica para resgatar e salvar os dados do input, informados pelo usuário
            document.getElementById('emailForm').addEventListener('submit', (event) => {
                event.preventDefault();
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const body = document.getElementById('body').value;
                vscode.postMessage({ command: 'modal_sendEmail', email, subject, body });
            });

            // Escuta o evento gerado no extension.ts para então mostrar o modal com o código robot

            window.addEventListener('message', event => {
                const message = event.data;

                if (message.command === 'showModal') {
                    const modalBody = document.getElementById('modalBody');
                    modalBody.innerHTML = \`<pre>\${message.code}</pre>\`;
                    const modal = new bootstrap.Modal(document.getElementById('robotModal'));
                    modal.show();
                }
            });

             // Lógica para o evento de navegação entre pagina, através do menu lateral
            document.addEventListener('DOMContentLoaded', () => {
                const vscode = acquireVsCodeApi();

                const btnHome = document.getElementById('home');
                const btnSendEmail = document.getElementById('EnviarEmail');
                const btnFilterEmail = document.getElementById('FiltrarEmail');
                const btnAcessarSMTP = document.getElementById('AcessarSMTP');
                const btnColetarDataAtual = document.getElementById('ColetarDataAtual');
                const btnCopiarArquivo = document.getElementById('CopiarArquivo');
                const btnMoverArquivo = document.getElementById('MoverArquivo');
                const btnCriarArquivo = document.getElementById('CriarArquivo');

                const btnLerArquivo = document.getElementById('LerArquivo');
                const btnExecutPython = document.getElementById('ExecutPython');
                const btnAbrirNavegador = document.getElementById('AbrirNavegador');
                const btnInserirTexto = document.getElementById('InserirTexto');
                const btnColetarTexto = document.getElementById('ColetarTexto');
                const btnClicarElemento = document.getElementById('ClicarElemento');
                const btnEsperarElemento = document.getElementById('EsperarElemento');
                const btnSelecionarArquivo = document.getElementById('SelecionarArquivo');
                const btnColetarElementos = document.getElementById('ColetarElementos');
                const btnIrPara = document.getElementById('IrPara');
                const btnVoltarPara = document.getElementById('VoltarPara');

            
                if (btnHome) {
                    btnHome.addEventListener('click', () => {
                        vscode.postMessage({ command: 'goToHome' });
                    });
                }

                if (btnSendEmail) {
                    btnSendEmail.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openSendEmailForm' });
                    });
                }
                if (btnFilterEmail) {
                    btnFilterEmail.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openFilterEmailForm' });
                    });
                }
                if (btnAcessarSMTP) {
                    btnAcessarSMTP.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openAcessarSMTPForm' });
                    });
                }
                if (btnColetarDataAtual) {
                    btnColetarDataAtual.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openColetarDataAtualForm' });
                    });
                }
                if (btnCopiarArquivo) {
                    btnCopiarArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openCopiarArquivoForm' });
                    });
                }

                if (btnMoverArquivo) {
                    btnMoverArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openMoverArquivoForm' });
                    });
                }
                if (btnCriarArquivo) {
                    btnCriarArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openCriarArquivoForm' });
                    });
                }

                if (btnLerArquivo) {
                    btnLerArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openLerArquivoForm' });
                    });
                }

                if (btnExecutPython) {
                    btnExecutPython.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openExecutPythonForm' });
                    });
                }
                if (btnAbrirNavegador) {
                    btnAbrirNavegador.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openAbrirNavegadorForm' });
                    });
                }
                if (btnInserirTexto) {
                    btnInserirTexto.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openInserirTextoForm' });
                    });
                }
                if (btnColetarTexto) {
                    btnColetarTexto.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openColetarTextoForm' });
                    });
                }
                if (btnClicarElemento) {
                    btnClicarElemento.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openClicarElementoForm' });
                    });
                }
                if (btnEsperarElemento) {
                    btnEsperarElemento.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openEsperarElementoForm' });
                    });
                }
                if (btnSelecionarArquivo) {
                    btnSelecionarArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openSelecionarArquivoForm' });
                    });
                }
                if (ColetarElementos) {
                    btnColetarElementos.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openColetarElementosForm' });
                    });
                }
                if (btnIrPara) {
                    btnIrPara.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openIrParaForm' });
                    });
                }
                if (btnVoltarPara) {
                    btnVoltarPara.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openVoltarParaForm' });
                    });
                }
            });        
        </script>
                
        
    `;
}

export function form_AbrirNavegador(): string {

    
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
        
        <div class="w-100  min-vh-100 d-flex row bg-custom-dark mx-0">
           <nav class="col-3 border-end min-vh-100">
                    <a class="w-100 d-block bg-success text-light fw-medium text-center py-2 mt-3 mb-4 rounded" href="#"
                        id="home">
                        Editor Low Code
                    </a>
                    <ul class="w-100  ps-3">
                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseSendEmails" role="button" aria-expanded="false"
                                aria-controls="collapseSendEmails">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                E-mail
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSendEmails">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="AcessarSMTP">
                                        Acessar SMTP
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="EnviarEmail">
                                        Enviar E-mail
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li>
                                    <a class="w-100 text-light " href="#" id="FiltrarEmail">
                                        Filtrar E-mails
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>



                        </div>



                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseDateTime" role="button" aria-expanded="false" aria-controls="collapseDateTime">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                DateTime
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseDateTime">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ColetarDataAtual">
                                        Coletar Data Atual
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseOperatingSystem" role="button" aria-expanded="false"
                                aria-controls="collapseOperatingSystem">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                Operating System
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseOperatingSystem">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="CopiarArquivo">
                                        Copiar Arquivo
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="MoverArquivo">
                                        Mover Arquivo
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="CriarArquivo">
                                        Criar Arquivo
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="LerArquivo">
                                        Ler Arquivo
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseBiultin" role="button" aria-expanded="false" aria-controls="collapseBiultin">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                Biultin
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseBiultin">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ExecutPython">
                                        Executar Expressão Python
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <li class="mb-3">
                            <a class="btn text-light w-100 text-start fw-medium" data-bs-toggle="collapse"
                                href="#collapseSelenium" role="button" aria-expanded="false" aria-controls="collapseSelenium">
                                <svg class="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.84049 5.95463C2.05146 5.74372 2.33756 5.62524 2.63587 5.62524C2.93418 5.62524 3.22027 5.74372 3.43124 5.95463L8.99999 11.5234L14.5687 5.95463C14.7809 5.7497 15.0651 5.63631 15.3601 5.63887C15.655 5.64143 15.9372 5.75975 16.1458 5.96833C16.3544 6.17692 16.4727 6.45908 16.4753 6.75405C16.4778 7.04902 16.3644 7.3332 16.1595 7.54538L9.79537 13.9095C9.5844 14.1204 9.2983 14.2389 8.99999 14.2389C8.70168 14.2389 8.41559 14.1204 8.20462 13.9095L1.84049 7.54538C1.62959 7.33441 1.51111 7.04831 1.51111 6.75C1.51111 6.45169 1.62959 6.1656 1.84049 5.95463Z"
                                        fill="#CCCCCC" />
                                </svg>
                                Selenium
                            </a>
                        </li>
                        <div class="collapse bg-transparent ps-4 mt-2 mb-4  " id="collapseSelenium">
                            <ul class="w-100 h-100 ps-1">
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="AbrirNavegador">
                                        Abrir Navegador
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ColetarTexto">
                                        Coletar Texto
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="InserirTexto">
                                        Inserir Texto
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ClicarElemento">
                                        Clicar no Elemento
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="EsperarElemento">
                                        Esperar Elemento
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="SelecionarArquivo">
                                        Selecionar Arquivo <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="ColetarElementos">
                                        Coletar Quantidade de Elementos
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="IrPara">
                                        Ir Para
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a class="w-100 text-light mb-3" href="#" id="VoltarPara">
                                        Voltar Para
                                        <br />
                                        <small class="ps-2" style="color: #cecece;">Resumo da keyword</small>
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </ul>
                              
                </nav>
            <!-- Fim Menu lateral  -->

            <!-- Início do Formulário - Abrir Navegador -->

            <div class="col-9 content d-flex justify-content-center align-items-center ">
                <div class="card w-75 bg-custom-dark border border-light rounded" >
                    <h5 class="card-header text-center bg-success text-light rounded-top py-2">Abrir Navegador</h5>
                    <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
                        
                    
                           
                            <form id="AbrirNavegadorForm" class="w-100 p-4">
                                <!-- Campo URL -->
                                        <div class="mb-3 row align-items-center">
                                            <label for="url" class="col-sm-3 col-form-label text-white">URL:</label>
                                            <div class="col-sm-9">
                                                <input type="url" class="form-control" id="url" placeholder="Digite a URL">
                                            </div>
                                        </div>

                                <!-- Campo Browser -->
                                <div class="mb-3 row align-items-center">
                                    <label for="browser" class="col-sm-3 col-form-label text-white">Navegador:</label>
                                    <div class="col-sm-9">
                                        <select class="form-select form-control" id="browser">
                                            <option selected disabled>Selecione o navegador</option>
                                            <option value="Chrome">Chrome</option>
                                            <option value="Firefox">Firefox</option>
                                            <option value="Edge">Edge</option>
                                            <option value="Safari">Safari</option>
                                            <option value="Opera">Opera</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Campo Options -->
                                <div class="mb-3 row align-items-center">
                                    <label for="options" class="col-sm-3 col-form-label text-white">Opções:</label>
                                    <div class="col-sm-9">
                                        <textarea class="form-control" id="options" rows="3" placeholder="Digite as opções adicionais"></textarea>
                                    </div>
                                </div>

                                <!-- Botão See Code -->
                                <div class="text-center">
                                    <button type="submit" class="btn btn-success px-5">See Code</button>
                                </div>
                                
                            </form>
                    </div>
                </div>
            </div>

            <!-- Fim do Formulário - Abrir Navegador -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

        <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="robotModalLabel">Código Robot</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                </div>
            </div>
        </div> 
        
        <!-- Fim do Modal - Mostrar Código robot -->
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

        <script>
            const vscode = acquireVsCodeApi();

            // Lógica para resgatar e salvar os dados do input, informados pelo usuário
            document.getElementById('AbrirNavegadorForm').addEventListener('submit', (event) => {
                event.preventDefault();

                vscode.postMessage({ command: 'modal_openNavegador'});
            });

            // Escuta o evento gerado no extension.ts para então mostrar o modal com o código robot

            window.addEventListener('message', event => {
                const message = event.data;

                if (message.command === 'showModal') {
                    const modalBody = document.getElementById('modalBody');
                    modalBody.innerHTML = \`<pre>\${message.code}</pre>\`;
                    const modal = new bootstrap.Modal(document.getElementById('robotModal'));
                    modal.show();
                }
            });

             // Lógica para o evento de navegação entre pagina, através do menu lateral
            document.addEventListener('DOMContentLoaded', () => {
                const vscode = acquireVsCodeApi();

                const btnHome = document.getElementById('home');
                const btnSendEmail = document.getElementById('EnviarEmail');
                const btnFilterEmail = document.getElementById('FiltrarEmail');
                const btnAcessarSMTP = document.getElementById('AcessarSMTP');
                const btnColetarDataAtual = document.getElementById('ColetarDataAtual');
                const btnCopiarArquivo = document.getElementById('CopiarArquivo');
                const btnMoverArquivo = document.getElementById('MoverArquivo');
                const btnCriarArquivo = document.getElementById('CriarArquivo');

                const btnLerArquivo = document.getElementById('LerArquivo');
                const btnExecutPython = document.getElementById('ExecutPython');
                const btnAbrirNavegador = document.getElementById('AbrirNavegador');
                const btnInserirTexto = document.getElementById('InserirTexto');
                const btnColetarTexto = document.getElementById('ColetarTexto');
                const btnClicarElemento = document.getElementById('ClicarElemento');
                const btnEsperarElemento = document.getElementById('EsperarElemento');
                const btnSelecionarArquivo = document.getElementById('SelecionarArquivo');
                const btnColetarElementos = document.getElementById('ColetarElementos');
                const btnIrPara = document.getElementById('IrPara');
                const btnVoltarPara = document.getElementById('VoltarPara');

            
                if (btnHome) {
                    btnHome.addEventListener('click', () => {
                        vscode.postMessage({ command: 'goToHome' });
                    });
                }

                if (btnSendEmail) {
                    btnSendEmail.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openSendEmailForm' });
                    });
                }
                if (btnFilterEmail) {
                    btnFilterEmail.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openFilterEmailForm' });
                    });
                }
                if (btnAcessarSMTP) {
                    btnAcessarSMTP.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openAcessarSMTPForm' });
                    });
                }
                if (btnColetarDataAtual) {
                    btnColetarDataAtual.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openColetarDataAtualForm' });
                    });
                }
                if (btnCopiarArquivo) {
                    btnCopiarArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openCopiarArquivoForm' });
                    });
                }

                if (btnMoverArquivo) {
                    btnMoverArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openMoverArquivoForm' });
                    });
                }
                if (btnCriarArquivo) {
                    btnCriarArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openCriarArquivoForm' });
                    });
                }

                if (btnLerArquivo) {
                    btnLerArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openLerArquivoForm' });
                    });
                }

                if (btnExecutPython) {
                    btnExecutPython.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openExecutPythonForm' });
                    });
                }
                if (btnAbrirNavegador) {
                    btnAbrirNavegador.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openAbrirNavegadorForm' });
                    });
                }
                if (btnInserirTexto) {
                    btnInserirTexto.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openInserirTextoForm' });
                    });
                }
                if (btnColetarTexto) {
                    btnColetarTexto.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openColetarTextoForm' });
                    });
                }
                if (btnClicarElemento) {
                    btnClicarElemento.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openClicarElementoForm' });
                    });
                }
                if (btnEsperarElemento) {
                    btnEsperarElemento.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openEsperarElementoForm' });
                    });
                }
                if (btnSelecionarArquivo) {
                    btnSelecionarArquivo.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openSelecionarArquivoForm' });
                    });
                }
                if (ColetarElementos) {
                    btnColetarElementos.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openColetarElementosForm' });
                    });
                }
                if (btnIrPara) {
                    btnIrPara.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openIrParaForm' });
                    });
                }
                if (btnVoltarPara) {
                    btnVoltarPara.addEventListener('click', () => {
                        vscode.postMessage({ command: 'openVoltarParaForm' });
                    });
                }
            });        
        </script>
                
        
    `;
}

