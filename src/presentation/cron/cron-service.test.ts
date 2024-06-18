import { CronService } from "./cron-service"



describe('CronService', () => {

    const mockTick = jest.fn();

    test('should create a job', (done) => {
        const job = CronService.createJob('* * * * * *', mockTick);

        setTimeout(() => {
            expect( mockTick ).toHaveBeenCalledTimes(3);
            job.stop();

            done();
        }, 2000);
    })
})