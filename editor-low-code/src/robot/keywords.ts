
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
    // Adicione outras keywords e seus argumentos aqui conforme necessário
};
