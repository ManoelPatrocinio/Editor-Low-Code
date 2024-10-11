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
            
            const vscode = acquireVsCodeApi();

            // Lógica para o evento de navegação entre pagina, através do menu lateral
            document.addEventListener('DOMContentLoaded', () => {

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
                <div class="modal-content bg-custom-dark text-light">
                    <div class="modal-header bg-success text-center">
                        <h5 class="modal-title fw-normal w-100" id="robotModalLabel">Código Robot - Enviar E-mail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                   <div class="modal-footer justify-content-center border border-0">
                        <button type="button" class="bg-transparent text-success border border-0"> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H3.33334V13.3333" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66684 5.83337H16.6668V15.8334C16.6668 16.2754 16.4912 16.6993 16.1787 17.0119C15.8661 17.3244 15.4422 17.5 15.0002 17.5H8.33351C7.89148 17.5 7.46756 17.3244 7.155 17.0119C6.84243 16.6993 6.66684 16.2754 6.66684 15.8334V5.83337Z" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Copy code
                        </button>
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

export function form_acessarSMTP(): string {
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

            <!-- Início do Formulário - Acessar SMTP -->

            
                        <div class="col-9 content d-flex justify-content-center align-items-center ">
                            <div class="card w-75 bg-custom-dark border-light rounded" >
                                <h5 class="card-header bg-success text-light rounded-top py-2">Acessar SMTP</h5>                            
                                <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">

                                    <form id="acessoSMTP" class="p-4 row g-3">
                                        <div class="col-md-6 mb-3">
                                            <label for="server" class=" col-form-label text-white">Server:</label>
                                            <input type="text" class="form-control" id="server" placeholder="Digite aqui">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="port" class=" col-form-label text-white">Port:</label>
                                            <input type="text" class="form-control" id="port" placeholder="ex: 845">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="emailsmtp" class=" col-form-label text-white">E-mail SMTP:</label>
                                            <input type="text" class="form-control" id="emailsmtp" placeholder="Digite aqui">
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="pass" class=" col-form-label text-white">Password:</label>
                                            <input type="password" class="form-control" id="pass" placeholder="*******">
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-success">See Code</button>
                                        </div>
                                    </form>

                                </div>    
                            </div>
                        </div>
                    

            <!-- Fim do Formulário - Acessar SMTP -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

         <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-custom-dark text-light">
                    <div class="modal-header bg-success text-center">
                        <h5 class="modal-title fw-normal w-100" id="robotModalLabel">Código Robot - Enviar E-mail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                   <div class="modal-footer justify-content-center border border-0">
                        <button type="button" class="bg-transparent text-success border border-0"> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H3.33334V13.3333" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66684 5.83337H16.6668V15.8334C16.6668 16.2754 16.4912 16.6993 16.1787 17.0119C15.8661 17.3244 15.4422 17.5 15.0002 17.5H8.33351C7.89148 17.5 7.46756 17.3244 7.155 17.0119C6.84243 16.6993 6.66684 16.2754 6.66684 15.8334V5.83337Z" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Copy code
                        </button>
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

            document.getElementById('acessoSMTP').addEventListener('submit', (event) => {
                event.preventDefault();
                vscode.postMessage({ command: 'modal_acessoSMTP' });
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

export function form_ClicarNoElemento(): string {
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

            <!-- Início do Formulário - Clicar no Elemento -->

          
                <div class="col-9 content d-flex justify-content-center align-items-center ">
                    <div class="card w-75 bg-custom-dark border-light rounded" >
                            <h5 class="card-header bg-success text-light rounded-top py-2">Clicar no Elemento</h5>                            
                        <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
   
                                <form id="clickelement" class="w-100 p-4">
                                    <div class="mb-3">
                                        <label for="click" class=" col-form-label text-white">Locator:</label>
                                        <input type="text" class="form-control" id="click" placeholder="Locator">
                                    </div>
                    
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-success">See Code</button>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                </div>
            

            <!-- Fim do Formulário - Clicar no Elemento -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

         <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-custom-dark text-light">
                    <div class="modal-header bg-success text-center">
                        <h5 class="modal-title fw-normal w-100" id="robotModalLabel">Código Robot - Enviar E-mail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                   <div class="modal-footer justify-content-center border border-0">
                        <button type="button" class="bg-transparent text-success border border-0"> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H3.33334V13.3333" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66684 5.83337H16.6668V15.8334C16.6668 16.2754 16.4912 16.6993 16.1787 17.0119C15.8661 17.3244 15.4422 17.5 15.0002 17.5H8.33351C7.89148 17.5 7.46756 17.3244 7.155 17.0119C6.84243 16.6993 6.66684 16.2754 6.66684 15.8334V5.83337Z" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Copy code
                        </button>
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
            document.getElementById('clickelement').addEventListener('submit', (event) => {
                event.preventDefault();
                vscode.postMessage({ command: 'modal_clickelement'});
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
            }
        </script>
                
        
    `;
}

export function form_EsperarElemento(): string {
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

            <!-- Início do Formulário - Esperar Elemento -->

            <div class="col-9 content d-flex justify-content-center align-items-center ">
                <div class="card w-75 bg-custom-dark border-light rounded" >
                        <h5 class="card-header bg-success text-light rounded-top py-2">Esperar Elemento</h5>                            
                    <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
                                
                            <form id="element" class="w-100 p-4">
                                <div class="mb-3 row align-items-center">
                                    <label for="locators" class="col-sm-3 col-form-label text-white">Locator:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="locators" placeholder="Locator element">
                                    </div>
                                </div>
                                <div class="mb-3 row align-items-center">
                                    <label for="timeout" class="col-sm-3 col-form-label text-white">Timeout:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="timeout" placeholder="Timeout">
                                    </div>
                                </div>
                                <div class="mb-3 row align-items-center">
                                    <label for="error" class="col-sm-3 col-form-label text-white">Error:</label>
                                    <div class="col-sm-9">
                                        <input class="form-control" id="error"  placeholder="Message Error"></textarea>
                                    </div>
                                </div>
                
                                <div class="text-center">
                                    <button type="submit" class="btn btn-success">See Code</button>
                                </div>
                            </form>
                            
                        
                    </div>
                </div>
            </div>

            <!-- Fim do Formulário - Esperar Elemento -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

         <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-custom-dark text-light">
                    <div class="modal-header bg-success text-center">
                        <h5 class="modal-title fw-normal w-100" id="robotModalLabel">Código Robot - Enviar E-mail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                   <div class="modal-footer justify-content-center border border-0">
                        <button type="button" class="bg-transparent text-success border border-0"> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H3.33334V13.3333" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66684 5.83337H16.6668V15.8334C16.6668 16.2754 16.4912 16.6993 16.1787 17.0119C15.8661 17.3244 15.4422 17.5 15.0002 17.5H8.33351C7.89148 17.5 7.46756 17.3244 7.155 17.0119C6.84243 16.6993 6.66684 16.2754 6.66684 15.8334V5.83337Z" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Copy code
                        </button>
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
            document.getElementById('element').addEventListener('submit', (event) => {
                event.preventDefault();
                
                vscode.postMessage({ command: 'modal_elemento'});
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
        </script>
                
        
    `;
}

export function form_SelecionarArquivo(): string {
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

            <!-- Início do Formulário - Selecionar Arquivo -->

            <div class="col-9 content d-flex justify-content-center align-items-center ">
                <div class="card w-75 bg-custom-dark border-light rounded" >
                        <h5 class="card-header bg-success text-light rounded-top py-2">Selecionar Arquivo</h5>                            
                    <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
                                
                            <form id="fileForm" class="w-100 p-4">
                                <div class="mb-3 row align-items-center">
                                    <label for="file" class="col-sm-3 col-form-label text-white">Locator:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="file" placeholder="Local do elemento">
                                    </div>
                                </div>
                                <div class="mb-3 row align-items-center">
                                    <label for="timeout" class="col-sm-3 col-form-label text-white">File Path:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="timeout" placeholder="Caminho do arquivo">
                                    </div>
                                </div>
                
                                <div class="text-center">
                                    <button type="submit" class="btn btn-success">See Code</button>
                                </div>
                            </form>
                            
                        
                    </div>
                </div>
            </div>

            <!-- Fim do Formulário - Selecionar Arquivo -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

         <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-custom-dark text-light">
                    <div class="modal-header bg-success text-center">
                        <h5 class="modal-title fw-normal w-100" id="robotModalLabel">Código Robot - Enviar E-mail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                   <div class="modal-footer justify-content-center border border-0">
                        <button type="button" class="bg-transparent text-success border border-0"> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H3.33334V13.3333" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66684 5.83337H16.6668V15.8334C16.6668 16.2754 16.4912 16.6993 16.1787 17.0119C15.8661 17.3244 15.4422 17.5 15.0002 17.5H8.33351C7.89148 17.5 7.46756 17.3244 7.155 17.0119C6.84243 16.6993 6.66684 16.2754 6.66684 15.8334V5.83337Z" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Copy code
                        </button>
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
        </script>
                
        
    `;
}

export function form_ColetarDataAtual(): string {
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

            <!-- Início do Formulário - Coletar Data Atual -->

            
                        <div class="col-9 content d-flex justify-content-center align-items-center ">
                            <div class="card w-75 bg-custom-dark border-light rounded" >
                                <h5 class="card-header bg-success text-light rounded-top py-2">Coletar Data Atual</h5>                            
                                <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
                                
                                    <form id="criterion" class="w-100 p-4">
                                        <div class="mb-3">
                                            <label for="datetime" class="col-sm-6 col-form-label text-white">Formato Data:</label>
                                            <input type="text" class="form-control" id="datetime" placeholder="Data Atual">
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-success">See Code</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    

            <!-- Fim do Formulário - Coletar Data Atual -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

         <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-custom-dark text-light">
                    <div class="modal-header bg-success text-center">
                        <h5 class="modal-title fw-normal w-100" id="robotModalLabel">Código Robot - Enviar E-mail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                   <div class="modal-footer justify-content-center border border-0">
                        <button type="button" class="bg-transparent text-success border border-0"> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H3.33334V13.3333" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66684 5.83337H16.6668V15.8334C16.6668 16.2754 16.4912 16.6993 16.1787 17.0119C15.8661 17.3244 15.4422 17.5 15.0002 17.5H8.33351C7.89148 17.5 7.46756 17.3244 7.155 17.0119C6.84243 16.6993 6.66684 16.2754 6.66684 15.8334V5.83337Z" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Copy code
                        </button>
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
        </script>
                
        
    `;
}

export function form_CriarArquivo(): string {
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

            <!-- Início do Formulário - Criar Arquivo -->

         
                
                
                <div class="col-9 content d-flex justify-content-center align-items-center ">
                    <div class="card w-75 bg-custom-dark border-light rounded" >
                            <h5 class="card-header bg-success text-light rounded-top py-2">Criar Arquivo</h5>                            
                        <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
                                
                            <form id="createfile" class="w-100 p-4">
                                <div class="mb-3 row align-items-center">
                                    <label for="path" class="col-sm-3 col-form-label text-white">Path:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="path" placeholder="Arquivo">
                                    </div>
                                </div>
                                <div class="mb-3 row align-items-center">
                                    <label for="content" class="col-sm-3 col-form-label text-white">Content:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="content" placeholder="Conteúdo">
                                    </div>
                                </div>                
                                <div class="text-center">
                                    <button type="submit" class="btn btn-success">See Code</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            

            <!-- Fim do Formulário - Criar Arquivo -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

         <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-custom-dark text-light">
                    <div class="modal-header bg-success text-center">
                        <h5 class="modal-title fw-normal w-100" id="robotModalLabel">Código Robot - Enviar E-mail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                   <div class="modal-footer justify-content-center border border-0">
                        <button type="button" class="bg-transparent text-success border border-0"> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H3.33334V13.3333" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66684 5.83337H16.6668V15.8334C16.6668 16.2754 16.4912 16.6993 16.1787 17.0119C15.8661 17.3244 15.4422 17.5 15.0002 17.5H8.33351C7.89148 17.5 7.46756 17.3244 7.155 17.0119C6.84243 16.6993 6.66684 16.2754 6.66684 15.8334V5.83337Z" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Copy code
                        </button>
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
            document.getElementById('createfile').addEventListener('submit', (event) => {
                event.preventDefault();
                
                vscode.postMessage({ command: 'modal_createfile'});
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
        </script>
                
        
    `;
}

export function form_ExecutarExpressaoPython(): string {
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

            <!-- Início do Formulário - Executar Expressão Python -->

            
                        <div class="col-9 content d-flex justify-content-center align-items-center ">
                            <div class="card w-75 bg-custom-dark border-light rounded" >
                                <h5 class="card-header bg-success text-light rounded-top py-2">Executar Expressão Python</h5>                            
                                <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
                                
                                    <form id="express" class="w-100 p-4">
                                        <div class="mb-4">
                                            <label for="expressao" class="col-sm-6 col-form-label text-white">Expression:</label>
                                            <input type="text" class="form-control" id="expressao" placeholder="Expressão">
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-success">See Code</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                

            <!-- Fim do Formulário - Executar Expressão Python -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

         <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-custom-dark text-light">
                    <div class="modal-header bg-success text-center">
                        <h5 class="modal-title fw-normal w-100" id="robotModalLabel">Código Robot - Enviar E-mail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                   <div class="modal-footer justify-content-center border border-0">
                        <button type="button" class="bg-transparent text-success border border-0"> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H3.33334V13.3333" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66684 5.83337H16.6668V15.8334C16.6668 16.2754 16.4912 16.6993 16.1787 17.0119C15.8661 17.3244 15.4422 17.5 15.0002 17.5H8.33351C7.89148 17.5 7.46756 17.3244 7.155 17.0119C6.84243 16.6993 6.66684 16.2754 6.66684 15.8334V5.83337Z" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Copy code
                        </button>
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
            document.getElementById('express').addEventListener('submit', (event) => {
                event.preventDefault();
                
                vscode.postMessage({ command: 'modal_express'});
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
        </script>
                
        
    `;
}

export function form_FiltrarEmails(): string {
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

            <!-- Início do Formulário - Filtrar Emails -->

            
                        <div class="col-9 content d-flex justify-content-center align-items-center ">
                            <div class="card w-75 bg-custom-dark border-light rounded" >
                                <h5 class="card-header bg-success text-light rounded-top py-2">Filtrar E-mails</h5>                            
                                <div class=" d-flex mx-auto  d-flex flex-column justify-content-center align-items-center border border-light m-4 rounded" style="width: 90%; height: 90%;">
                                 
                                    <form id="criterion" class="w-100 p-4">
                                        <div class="mb-4">
                                            <label for="criterios" class="col-sm-3 col-form-label text-white">Criterion:</label>
                                            <input type="text" class="form-control" id="criterios" placeholder="Informe os critérios">
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-success">See Code</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    

            <!-- Fim do Formulário - Filtrar Emails -->

        </div>
        <!-- Início do Modal - Mostrar Código robot -->

         <div class="modal fade" id="robotModal" tabindex="-1" aria-labelledby="robotModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-custom-dark text-light">
                    <div class="modal-header bg-success text-center">
                        <h5 class="modal-title fw-normal w-100" id="robotModalLabel">Código Robot - Enviar E-mail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- O código Robot será injetado aqui -->
                    </div>
                   <div class="modal-footer justify-content-center border border-0">
                        <button type="button" class="bg-transparent text-success border border-0"> 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3333 2.5H3.33334V13.3333" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66684 5.83337H16.6668V15.8334C16.6668 16.2754 16.4912 16.6993 16.1787 17.0119C15.8661 17.3244 15.4422 17.5 15.0002 17.5H8.33351C7.89148 17.5 7.46756 17.3244 7.155 17.0119C6.84243 16.6993 6.66684 16.2754 6.66684 15.8334V5.83337Z" stroke="#0AF54C" stroke-width="0.791667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Copy code
                        </button>
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
        </script>
                
        
    `;
}
