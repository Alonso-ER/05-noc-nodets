import { error } from "console";

export enum LogSeverityLevel {
    low     = 'low',
    medium  = 'medium',
    high    = 'high'
}

export interface LogEntityOptions{
    level: LogSeverityLevel;
    message: string;
    origin: string;
    createdAt?: Date
}


export class LogEntity {

    public level: LogSeverityLevel; // enum
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor( options: LogEntityOptions ) {
        const { message, level, origin, createdAt = new Date() } = options;
        this.message = message;
        this.level = level
        this.createdAt = createdAt;
        this.origin = origin;
    }

    static fromJSON = (json: string): LogEntity => {
        const { message, level, createdAt, origin } = JSON.parse(json);

        const log = new LogEntity({
            message,
            level,
            createdAt,
            origin,
        });

        return log;
        //if( !message ) throw new Error('Message is required');
        //if( !level ) throw new Error('Level is required')
    }

}
