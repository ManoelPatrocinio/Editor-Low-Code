
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
        Authorize Smtp    account=${'{email_smtp}'}    password=${'{senha_smtp}'}   smtp_server=${'{servidor_smtp}'}   smtp_port${'{porta_smtp}'}`,
        arguments: ['email_smtp', 'senha_smtp', 'servidor_smtp', 'porta_smtp']
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
      // Adicione outras keywords e seus argumentos aqui conforme necessário
};
