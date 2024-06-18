import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { LogRepositoryImpl } from './log.repository.impl';



describe('LogRepositoryImpl', () => {

    const mockLogDatasource = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    }

    const logRepository = new LogRepositoryImpl(mockLogDatasource);

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('savelog should call the datasource with arguments', async() => {

        const log = { level: LogSeverityLevel.high, message: 'hola' } as LogEntity;
        await logRepository.saveLog(log);
        expect(mockLogDatasource.saveLog).toHaveBeenCalledWith(LogSeverityLevel.low)
    });

    test('getLogs hsould call the datasource with arguments', async() => {

        await logRepository.getLogs(LogSeverityLevel.low);
        expect( mockLogDatasource.getLogs ).toHaveBeenCalledWith(LogSeverityLevel.low)

    })
})