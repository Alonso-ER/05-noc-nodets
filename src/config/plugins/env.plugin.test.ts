import { envs } from "./env.plugin"


describe('env.plugin.ts', () => {
    
    test('Should return env options', () => {
        
        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'marenasibarra7@gmail.com',
            MAILER_SECRET_KEY: 'jwufvdyceymxvlgc',
            PROD: true,
            MONGO_URL: 'mongodb://alonso:123456789@localhost:27017',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'alonso',
            MONGO_PASS: '123456789'
        });
    });
    test('should return error if not found env', async() => {

        jest.resetModules();
        process.env.PORT = 'ABC';
        try {
            await import('./env.plugin');
            expect(true).toBe(false);

        } catch (error) {
            expect(`${error}`).toContain(`"PORT" should be a valid integer`);
        }

    })

})