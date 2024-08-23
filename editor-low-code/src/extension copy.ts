
import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('editor-low-code.start', () => {
            const panel = vscode.window.createWebviewPanel(
                'robotWebview', 
                'Robot Framework Search', 
                vscode.ViewColumn.One, 
                { enableScripts: true }
            );

            panel.webview.html = getWebviewContent();

            panel.webview.onDidReceiveMessage(
                message => {
                    if (message.command === 'search') {
                        const searchTheme = message.text;
                        runRobotSearch(searchTheme, context.extensionPath);
                    }
                },
                undefined,
                context.subscriptions
            );
        })
    );
}

function getWebviewContent(): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Robot Framework Search</title>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        </head>
            <body>
                <div class="container">
                    <h1 class="mt-5">Google Search with Robot Framework</h1>
                    <div class="form-group">
                        <input type="text" id="search-input" class="form-control" placeholder="Enter search theme">
                    </div>
                    <button id="search-button" class="btn btn-primary">Search</button>
                </div>
                <script>
                    const vscode = acquireVsCodeApi();
                    document.getElementById('search-button').addEventListener('click', () => {
                        const searchTheme = document.getElementById('search-input').value;
                        vscode.postMessage({ command: 'search', text: searchTheme });
                    });
                </script>
            </body>
    </html>`;
}

// Classe para enviar e-mails
export class EmailSender {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail', // Ajuste 
            auth: {
                user: 'your-email@gmail.com', // Substitua pelo seu e-mail
                pass: 'your-email-password' // Substitua por sua senha 
            }
        });
    }

    sendEmail(to: string, subject: string, text: string) {
        const mailOptions = {
            from: 'your-email@gmail.com', 
            to: to,
            subject: subject,
            text: text
        };

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                vscode.window.showErrorMessage(`Error sending email: ${error.message}`);
                return;
            }
            vscode.window.showInformationMessage(`Email sent: ${info.response}`);
        });
    }
}

// Classe para executar a pesquisa e enviar e-mail
export class RobotSearch {
    private emailSender: EmailSender;

    constructor() {
        this.emailSender = new EmailSender();
    }

    runRobotSearch(searchTheme: string, extensionPath: string) {
        const robotFilePath = path.join(extensionPath, 'robot', 'search.robot');

        const command = `robot --variable SEARCH_THEME:"${searchTheme}" "${robotFilePath}"`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Error: ${stderr}`);
                return;
            }

            // Ler parâmetros de e-mail do arquivo .robot
            const emailParams = this.extractEmailParams(robotFilePath);

            const message = `Search complete:\n\n${stdout}`;
            vscode.window.showInformationMessage(message);

            // Enviar e-mail com os parâmetros extraídos
            this.emailSender.sendEmail(
                emailParams.to,
                emailParams.subject,
                `${emailParams.body}\n\n${message}`
            );
        });
    }

    private extractEmailParams(robotFilePath: string) {
        const fileContent = fs.readFileSync(robotFilePath, 'utf8');
        const lines = fileContent.split('\n');

        const params: { [key: string]: string } = {};
        for (const line of lines) {
            const [key, value] = line.split(/\s+/);
            if (key && value) {
                params[key] = value;
            }
        }

        return {
            to: params['${EMAIL_TO}'] || 'default@example.com',
            subject: params['${EMAIL_SUBJECT}'] || 'Default Subject',
            body: params['${EMAIL_BODY}'] || 'Default Body'
        };
    }
}

export function deactivate() {}


