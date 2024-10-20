import * as vscode from 'vscode';
import fs from 'fs';
import * as path from 'path';
import { exec } from 'child_process';

export class SendEmailWithRobot{
    runSendEmail(to: string, subject: string, text: string, extensionPath: string) {

        const robotFilePath = path.join(extensionPath,'src', 'robot', 'send_email.robot');
        const command = `robot --variable EMAIL_TO:"${to}" --variable EMAIL_SUBJECT:"${subject}" --variable EMAIL_BODY:"${text}" "${robotFilePath}"`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                // Exibir mensagem de erro se o comando falhar
                vscode.window.showErrorMessage(`Houve um erro interno ao enviar o e-mail, por favor, tente novamente. `);
                console.log(`Failed to send email. Error: ${stderr}`);
                return;
            }else{
                vscode.window.showInformationMessage('E-mail enviado com sucesso !');

            }
        
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




