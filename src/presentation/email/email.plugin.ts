import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/env.plugin';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

export interface SendEmailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[]
}

export interface Attachment {
    filename: string,
    path: string,
}


export class EmailPlugin {


    constructor ( ){}


    public async sendEmail(options: SendEmailOptions): Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = options

        try {
            const transporter = nodemailer.createTransport({
                service: envs.MAILER_SERVICE,
                auth: {
                    user: envs.MAILER_EMAIL,
                    pass: envs.MAILER_SECRET_KEY
                }
            });

            const sentInformacion = await transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            });
            console.log(sentInformacion);
            return true;

        } catch( error ) {
            console.error(error);
            return false;
        }
    }

    public async sendEmailWithFileSystemLogs(to: string | string[]) {

        const subject = 'Logs del Servidor';
        const htmlBody = `
        <h3>Logs de sistema NOC</h3>
            <p>Buenas tardes a todo el personal, les hago entrega
                de los logs recibidos por el sistema del dia de ayer.
                Por favor confirmar de recibido y si tienen alguna duda
                mandenme un email, mensaje privado o pasen por la 
                oficina a hablarlo. Saludos.
            </p>
            <p>Ver logs adjuntos</p>
        `;
        const attachments:Attachment[] = [
            { filename: 'logs-all.txt', path: './logs/logs-all.log' },
            { filename: 'logs-medium.logs', path: './logs/logs-medium.log' },
            { filename: 'logs-high.logs', path: './logs/logs-high.log' },
        ];

        return this.sendEmail({
            to, subject, attachments, htmlBody
        });
    }

}