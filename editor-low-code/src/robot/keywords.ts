type RobotKeyword = {
  code: string;
  arguments: string[];
};

export type RobotKeywords = Record<string, RobotKeyword>;

// Exemplo de códigos das keywords
export const robotKeywords: RobotKeywords = {
  'Enviar E-mails': {
    code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp
        
        *** Variables ***

        ${'${email_smtp}'}      exemple
        ${'${destinatário}'}    exemple
        ${'${assunto}'}         exemple
        ${'${corpo_email}'}     exemple
        ${'${anexos}'}          exemple

        *** Keywords ***

        Send Message
            Send Message    ${'${email_smtp}'}  ${'${destinatário}'}  ${'${assunto}'}  ${'${corpo_email}'}  ${'${anexos}'} `,
        arguments: ['email_smtp', 'destinatário', 'assunto', 'corpo_email', 'anexos']
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
  'Copiar Arquivo': {
      code: `
        *** Settings ***

        Library    RPA.Browser.Selenium
        Library    OperatingSystem
        
        *** Variables ***

        ${'${arquivo_para_copiar}'}     exemple
        ${'${diretorio_final}'}         exemple


        *** Keywords ***
        
        Copiar Arquivo
          Copy File  source ${'${arquivo_para_copiar}'}    destination ${'${diretorio_final}'}

      `,
        arguments: ['arquivo_para_copiar','diretorio_final']
      },
    'Ler Arquivo': {
      code: `
        *** Settings ***

        Library    RPA.Browser.Selenium
        Library    OperatingSystem

        *** Variables ***
        
        ${'${conteudo_arquivo}'}         exemple
        ${'${arquivo}'}                  exemple

        *** Keywords ***
        Ler Arquivo
            ${'${conteudo_arquivo}'}    Get File    ${'${arquivo}'}
      `,

      arguments: ['conteudo_arquivo','arquivo']

      },
    'Mover Arquivo': {
      code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    OperatingSystem

        *** Variables ***
        
        ${'${arquivo_para_mover}'}         exemple
        ${'${diretorio_final}'}            exemple
            
        *** Keywords ***
        Mover Arquivo
            Move File    source=${'${arquivo_para_mover}'}    destination=${'${diretorio_final}'} 
      `,
         arguments: ['arquivo_para_mover','diretorio_final']
        },
    'Coletar Texto': {
        code: `
        *** Settings ***
        Library    RPA.Browser.Selenium

        *** Variables ***
        
        ${'${locator}'}         exemple
            
        *** Keywords ***
        Coletar Texto
            Get Text    locator=${'${locator}'} `,
        arguments: ['locator']
        },
        'Abrir Navegador': {
          code: `
              *** Settings ***
              Library    RPA.Browser.Selenium

              *** Variables ***

               ${'${url}'}         exemple
               ${'${navegador}'}   exemple
               ${'${options}'}     exemple

              
              *** Keywords ***
              Abrir Navegador
                  Open Browser    ${'${url}'}    ${'${navegador}'}    ${'${options}'}`,
              arguments: ['url', 'navegador', 'options']
          }, 
          
  // Adicione outras keywords e seus argumentos aqui conforme necessário
};
