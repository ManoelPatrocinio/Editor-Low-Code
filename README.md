# Editor-Low-Code

## Links materiais de estudo
https://www.freecodecamp.org/news/making-vscode-extension/
https://code.visualstudio.com/api/get-started/your-first-extension
https://www.youtube.com/watch?v=cHQo26fdx_o&t=210s

## Passo 1: Configuração Inicial do Projeto:
Instale o yo (Yeoman) e o gerador de extensão do VS Code: 

``` 
 npm install -g yo generator-code 

```

##  Crie o esqueleto da extensão:
``` 
  yo code  

```

## Selecione as opções
``` 
  New Extension (TypeScript)
  What's the name of your extension? () => digite o nome da extensão
  What's the identifier of your extension? (exemplo-extensao) => Presione Enter
  What's the identifier of your extension? exemplo-extensao
  What's the description of your extension? => Presione Enter
  Initialize a git repository? No
  Which bundler to use? webpack
  Which package manager to use? npm
``` 
##  Selecione o tipo de extensão que você deseja criar:

```
  Escolha "New Extension (TypeScript)".
  Dê um nome à sua extensão.
  Preencha as demais informações conforme necessário.
```
## Passo 2: Estrutura do Projeto
Após a criação do projeto, você terá uma estrutura de arquivos semelhante a esta:

```
  my-extension
    ├── .vscode
    ├── src
    │   ├── extension.ts
    │   ├── test
    ├── package.json
    ├── tsconfig.json
    └── webpack.config.js
```
## Passo 3: Instalação de Dependências
Instale as dependências necessárias:

```
  npm install nodemailer bootstrap
  npm install --save-dev @types/node
```

## Passo 4: Configuração do Webview
crie uma pasta chamada 'webview', nela ficará os arquivos webs da extensão (.html, .css, .js), depois crie o arquivo 'webview.ts' para esta pasta.

Após as alterações, você terá a seguinte estrutura de arquivos

```
  my-extension
    ├── .vscode
    ├── src
    │   ├── extension.ts
    │   ├── webview
          ├── webview.ts
         
    ├── package.json
    ├── tsconfig.json
    └── webpack.config.js
```

## Passo 7: Testando a Extensão
Compile a extensão (sempre que fizer uma alteração, rode este comando):
```  npm run compile ```

###   Inicie a extensão no VS Code:

Após clonar o repositorio, instale as dependencias e gere o pasta 'dist' :

```
  npm install
  npm run compile 

```

Vá até o arquivo 'extension.ts' e  Pressione F5;
O VS Code irá abrir uma nova janela com a extensão em modo de depuração.
Execute o comando (Ctrl+Shift+P) e escreva o  "Inicar Extensão" a partir da paleta de comandos .
