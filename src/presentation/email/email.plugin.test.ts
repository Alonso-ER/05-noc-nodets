import nodemailer from 'nodemailer';
import { EmailPlugin, SendEmailOptions } from './email.plugin';


describe('email.plugin.ts', () => {

    const mockSendMail = jest.fn();

    // Mock al createTransport
    nodemailer.createTransport = jest.fn().mockReturnValue( {
      sendMail: mockSendMail
    } );
  
    const emailPlugin = new EmailPlugin();
  

    test('should send email', async() => {

        const options: SendEmailOptions = {
            to: 'marenasibarra7qgmail.com',
            subject: 'Test',
            htmlBody: '<h1>Test</h1>'
        }

        await emailPlugin.sendEmail( options );

        expect( mockSendMail ).toHaveBeenCalledWith( {
            attachments: expect.any( Array ),
            html: "<h1>Test</h1>",
            subject: "Test",
            to: "marenasibarra7@gmail.com",
        });
    });

    test( 'should send email with attachements', async () => {

        const email = 'marenasibarra7@gmail.com';
        await emailPlugin.sendEmailWithFileSystemLogs( email );
    
    
        expect( mockSendMail ).toHaveBeenCalledWith( {
          to: email,
          subject: "Logs del servidor",
          html: expect.any( String ),
          attachments: expect.arrayContaining( [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
          ] )
        } );
    
    
    
      } );
})