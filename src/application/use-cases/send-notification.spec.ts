import { SendNotification } from './send-notification';

describe('Send Notificaiton', () => {
  it('shold be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-0recipient- Id',
    });

    expect(notification).toBeTruthy();
  });
});
