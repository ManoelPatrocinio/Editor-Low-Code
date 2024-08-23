Settings 
Library   RPA.Browser.Selenium
Library   RPA.Email.ImapSmtp
Library   RPA.Excel.Files
Library   OperatingSystem
Library   Collections
Library   Process
Library   RPA.Tables
Library   String


 Variables 

variaveis para o email
${servidor_smtp_gmail}       smtp.gmail.com
${porta_smtp_gmail}          587
${email_remetente}           manoelpatrocinio99@gmail.com
${email_password}            aquz vluk lpkc vdva


variaveis para email que terão os valores vindos a interface do usuário
${EMAIL_TO}                default@example.com
${EMAIL_SUBJECT}           Default Subject
${EMAIL_BODY}              Default Text


${browser}                   chrome

 Keywords  


Enviar Email 

  Authorize smtp    ${email_remetente}    ${email_password}   ${servidor_smtp_gmail}  ${porta_smtp_gmail}
  Send Message    ${EMAIL_TO}    recipients=${email_remetente}   subject=${EMAIL_SUBJECT}    body=${EMAIL_BODY}


Fechar navegador
  Close Browser


 Test Cases 
canário 1: Enviar Email
    Enviar Email
