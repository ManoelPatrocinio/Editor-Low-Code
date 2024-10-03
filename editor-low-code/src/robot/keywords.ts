
type RobotKeyword = {
    code: string;
    arguments: string[];
};

export type RobotKeywords = Record<string, RobotKeyword>;

// Exemplo de códigos das keywords
export const robotKeywords:RobotKeywords = {
    'Enviar E-mail': {
        code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp

        *** Variables ***
        
        ${'{email}'}    
        ${'{assunto}'}    
        ${'{mensagem}'}
    

        *** Keywords ***
        Enviar E-mail
            [Arguments]    ${'{email}'}    ${'{assunto}'}    ${'{mensagem}'}
            Send Email    ${'{email}'}    ${'{assunto}'}    ${'{mensagem}'}`,
        arguments: ['email', 'assunto', 'mensagem']
    },
    'Acessar SMTP': {
        code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp

        *** Keywords ***
        Acessar SMTP
            [Arguments]    ${'{host}'}    ${'{porta}'}
            Open SMTP Connection    ${'{host}'}    ${'{porta}'}`,
        arguments: ['host', 'porta']
    },
    'Filtrar E-mails': {
        code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp
        
        *** Keywords ***
        Filtrar E-mails
            [Arguments]    ${'{criterio}'}
            Filter Emails    ${'{criterio}'}`,
         arguments: ['criterio']
        },
    'Copiar Arquivo': {
        code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp
        
        *** Keywords ***
        Copiar Arquivo
            [Arguments] source ${'{arquivo_para_copiar}'}
            destination ${'{diretorio_final}'}`,
         arguments: ['arquivo_para_copiar','diretorio_final']
        },
    'Ler Arquivo': {
        code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp
        
        *** Keywords ***
        Ler Arquivo
            [Arguments] ${'{conteudo_arquivo}'}    Get File    ${'{arquivo}'}`,
         arguments: ['conteudo_arquivo','arquivo']
        },
    'Mover Arquivo': {
        code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp
            
        *** Keywords ***
        Mover Arquivo
            [Arguments]    Move File    source=${'{arquivo_para_mover}'}    destination=${'{diretorio_final}'} `,
         arguments: ['arquivo_para_mover','diretorio_final']
        },
    'Coletar Texto': {
        code: `
        *** Settings ***
        Library    RPA.Browser.Selenium
        Library    RPA.Email.ImapSmtp
            
        *** Keywords ***
        Coletar Texto
            [Arguments]   Get Text    locator=${'{locator}'} `,
        arguments: ['locator']
        },
    
      // Adicione outras keywords e seus argumentos aqui conforme necessário
};
