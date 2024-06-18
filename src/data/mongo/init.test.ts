import mongoose from 'mongoose';
import { MongoDatabase } from './init';


describe('init MongoDb', () => {

    afterAll(() => {
        mongoose.connection.close();
    })

    test('should conect to NomgoDB', async() => {

        const connected = await MongoDatabase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!,
        })
        expect(connected).toBe(true);
    });

    test('should throw an error', async() => {
        try{
            const connected = await MongoDatabase.connect({
                dbName: process.env.MONGO_DB_NAME!,
                mongoUrl: 'mongodb://alonso:123456789@localhoadfsdfst:27017',
            });
            expect(true).toBe(false)
        } catch(error) {

        }
        
    })
})