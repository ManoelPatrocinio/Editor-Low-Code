type RobotKeyword = {
  code: string;
  arguments: string[];
};

export type RobotKeywords = Record<string, RobotKeyword>;

// Exemplo de códigos das keywords
export const robotKeywords: RobotKeywords = {
  "Enviar E-mail": {
    code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp

        *** Variables ***
        
        ${"${email}"}    
        ${"${assunto}"}    
        ${"${mensagem}"}
    

        *** Keywords ***
        Enviar E-mail
            [Arguments]    ${"${email}"}    ${"${assunto}"}    ${"${mensagem}"}
            Send Email    ${"${email}"}    ${"${assunto}"}    ${"${mensagem}"}`,
    arguments: ["email", "assunto", "mensagem"],
  },
  "Acessar SMTP": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp

        *** Variables ***

        ${"${email_smtp}"}         exemple
        ${"${senha_smtp}"}         exemple
        ${"${servidor_smtp}"}      exemple
        ${"${porta_smtp}"}         exemple

        *** Keywords ***

        Acessar SMTP
        Authorize Smtp    account=${"${email_smtp}"}    password=${"${senha_smtp}"}   smtp_server=${"${servidor_smtp}"}   smtp_port${"${porta_smtp}"}
    `,
    arguments: ["email_smtp", "senha_smtp", "servidor_smtp", "porta_smtp"],
  },
  "Filtrar E-mails": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp
        Library    Collections
        
        *** Variables ***

        ${"${filtro_emails}"}         exemple


        *** Keywords ***

        Filtrar E-mails
            List Messages    criterion=${"${filtro_emails}"}
    `,
    arguments: ["filtro_emails"],
  },
  "Clicar no Elemento": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium

        *** Variables ***

        ${"${locator}"}         exemple

        
        *** Keywords ***

        Clicar no Elemento
            Click Element    locator=${"${locator}"}
    `,
    arguments: ["locator"],
  },
  "Esperar Elemento": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium

        *** Variables ***

        ${"${locator}"}         exemple
        ${"${timeout}"}         exemple
        ${"${error_msg}"}       exemple
        
        *** Keywords ***

        Esperar Elemento
            Wait Until Page Contains Element    locator=${"${locator}"}  timeout=${"${timeout}"}  error=${"${error_msg}"}
    `,
    arguments: ["locator", "timeout", "error_msg"],
  },
  "Selecionar Arquivo": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium
        Library    OperatingSystem

        *** Variables ***

        ${"${locator}"}           exemple
        ${"${file_path}"}         exemple
        
        *** Keywords ***
        Selecionar Arquivo
            Choose File    locator=${"${locator}"}  file_path=${"${file_path}"}
            
    `,
    arguments: ["locator", "file_path"],
  },
  "Coletar Data Atual": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium
        Library    DateTime

        *** Variables ***

        ${"${formato_data}"}           exemple
        
        *** Keywords ***

        Coletar Data Atual
            ${"${data_atual}"}    Get Current Date  result_format=${"${formato_data}"}
    `,
    arguments: ["formato_data"],
  },
  "Criar Arquivo": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium
        Library    OperatingSystem

        *** Variables ***

        ${"${arquivo}"}            exemple
        ${"${conteudo}"}           exemple
        
        *** Keywords ***

        Criar Arquivo
            Create File    path=${"${arquivo}"}  content=${"${conteudo}"}
    `,
    arguments: ["arquivo", "conteudo"],
  },
  "Executar Expressao Python": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium

        *** Variables ***

        ${"${expressao}"}            exemple
        
        *** Keywords ***

        Executar Expressao Python
            ${"${result_expressao}"}    Evaluate    expression=${"${expressao}"}
    `,
    arguments: ["expressao"],
  },
  "Inserir Texto": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium

        *** Variables ***

        ${"${locator}"}            exemple
        ${"${texto}"}              exemple
        
        *** Keywords ***

        Inserir Texto
            Input Text    locator=${"${locator}"}    text=${"${texto}"}
        `,
    arguments: ["locator", "texto"],
  },

  "Ir Para": {
    code: `
        *** Settings ***

        Library    RPA.Browser.Selenium

        *** Variables ***

        ${"${url}"}            exemple
        
        *** Keywords ***

        Ir Para
            Go To    url=${"${url}"}
        `,
    arguments: ["url"],
  },
  "Voltar Para": {
    code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        
        *** Keywords ***
        Voltar Para
            Go Back
        `,
    arguments: [],
  },
  // Adicione outras keywords e seus argumentos aqui conforme necessário
};
