export class SendEmailWithRobot{
    runSendEmail(to: string, subject: string, text: string, extensionPath: string) {

        const robotFilePath = path.join(extensionPath, 'robot', 'send_email.robot');
        const command = robot --variable EMAIL_TO:"${to}" --variable EMAIL_SUBJECT:"${subject}" --variable EMAIL_BODY:"${text}" "${robotFilePath}";

        exec(command, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(Error: ${stderr});
                return;
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
            to: params['${EMAIL_TO}']  'default@example.com',
            subject: params['${EMAIL_SUBJECT}']  'Default Subject',
            body: params['${EMAIL_BODY}'] || 'Default Body'
        };
    }
}