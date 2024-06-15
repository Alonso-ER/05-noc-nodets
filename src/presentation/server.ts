import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailPlugin } from './email/email.plugin';


const fsLogRepository = new LogRepositoryImpl( 
    new FileSystemDatasource()
 );
 const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource()
 );
 const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource()
 );

 const logRepository = [
    fsLogRepository,
    mongoLogRepository,
    postgresLogRepository,
]


export class Server {

    public static async start() {
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

        // const logs = await logRepository.getLogs(LogSeverityLevel.low);
        // console.log(logs)


        // CronService.createJob(
        //     '*/5 * * * * *', // cronTime
        //     () => {
        //         const url = `http://google.com`
        //         new CheckServiceMultiple(
        //             logRepository,
        //             () => console.log(`${url} is ok`),
        //             ( error ) => console.log(error),
        //             ).execute(url);

        //     }
        // );

    
    }

}