import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailPlugin } from './email/email.plugin';

const fileSystemLogRepository = new LogRepositoryImpl( 
    new FileSystemDatasource(), 
 );


export class Server {

    public static start() {
        console.log('Server started...');

        //todo: Mandar Email
        // const emailPlugin = new EmailPlugin();
        // emailPlugin.sendEmailWithFileSystemLogs(
        //     [ 'marenasibarra7@gmail.com' ]
        // );
        // new SendEmailLogs(fileSystemLogRepository).execute(
        //     [ 'marenasibarra7@gmail.com' ]
        // );

        // emailPlugin.sendEmailWithFileSystemLogs(
        //     ['marenasibarra7@gmail.com',]
        // );

        // CronService.createJob(
        //     '*/5 * * * * *', // cronTime
        //     () => {
        //         const url = `http://google.com`
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok`),
        //             ( error ) => console.log(error),
        //             ).execute(url);
        //         // new CheckService().execute(`http://google.com`);

        //     }
        // );

    
    }

}