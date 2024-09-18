*** Settings ***
Documentation    Principais Keywords
Library    RPA.Browser.Selenium
Library    Collections
Library    RPA.Email.ImapSmtp
Library    DateTime
Library    OperatingSystem


*** Variables ***
# Abrir Navegador
${url}    
${navegador}    
${options}    ${None}

# Locator
${locator}

# Inserir Texto
${texto}

# Timeout e Erro
${timeout}    ${None}    
${error_msg}    ${None}

# Evaluate
${expressao}
${result_expressao}

# Caminho do arquivo
${file_path}    

# Quantidade de Elementos
${qtd_elementos}

# SMTP
${email_smtp}    
${servidor_smtp}    
${porta_smtp}    
${senha_smtp}    

# Infos do E-mail
${destinatário}
${assunto}
${corpo_email}
${anexos}
${filtro_emails}    

# Data
${data_atual}
${formato_data}

# Arquivos
${arquivo}
${diretorio_final}    
${conteudo}    
${conteudo_arquivo}
${arquivo_para_copiar}    
${arquivo_para_mover}    

*** Keywords ***
## Selenium
Abrir Navegador
    Open Browser    url=${url}    browser=${navegador}    options=${options}

Fechar Navegador
    Close Browser

Coletar Texto
    Get Text    locator=${locator}

Inserir Texto
    Input Text    locator=${locator}    text=${texto}

Clicar no Elemento
    Click Element    locator=${locator}

Esperar Elemento
    Wait Until Page Contains Element    locator=${locator}    timeout=${timeout}    error=${error_msg}

Selecionar Arquivo
    Choose File    locator=${locator}    file_path=${file_path}

Coletar Quantidade de Elementos
    ${qtd_elementos}    Get Element Count    locator=${locator}

Ir Para
    Go To    url=${url}

Voltar Para
    Go Back


## E-mail
Acessar SMTP
    Authorize Smtp    account=${email_smtp}    password=${senha_smtp}    smtp_server=${servidor_smtp}    smtp_port=${porta_smtp}

Enviar E-mail
    Send Message    sender=${email_smtp}    recipients=${destinatário}    subject=${assunto}    body=${corpo_email}    attachments=${anexos}

Filtrar E-mails
    List Messages    criterion=${filtro_emails}

# Datetime
Coletar Data Atual
    ${data_atual}    Get Current Date    result_format=${formato_data}

## Operating System
Copiar Arquivo
    Copy File    source=${arquivo_para_copiar}    destination=${diretorio_final}

Mover Arquivo
    Move File    source=${arquivo_para_mover}    destination=${diretorio_final}

Criar Arquivo
    Create File    path=${arquivo}    content=${conteudo}

Ler Arquivo
    ${conteudo_arquivo}    Get File    ${arquivo}

## Biultin
Executar Expressão Python
    ${result_expressao}    Evaluate    expression=${expressao}

