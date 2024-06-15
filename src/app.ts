import { PrismaClient } from "@prisma/client";
import { envs } from "./config/plugins/env.plugin";
import { LogModel, MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";

(async() => {
    main();

})();

async function main(){

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    // const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'LOW',
    //         message: 'Test Message',
    //         origin: 'App.ts'
    //     }
    // });

    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'MEDIUM'
    //     }
    // });


    //! Crear una colección = tables, documento = row
    // const newLog = await LogModel.create({
    //     message: 'Test Message desde Mongo',
    //     origin: 'App.ts',
    //     level: 'low',
    // });

    // await newLog.save();

    // console.log(newLog);

    // const logs = await LogModel.find();
    // console.log(logs);

    Server.start();
    // console.log(envs.PORT)
}