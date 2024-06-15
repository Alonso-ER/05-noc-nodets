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