import { Content } from './content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: Content('Nova soliciatação de amizade'),
      category: 'social',
      recipientId: 'Exemple',
    });

    expect(notification).toBeTruthy();
  });
});
