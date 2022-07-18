import Validator from '../app';

test('Проверка имени пользователя', () => {
  const nickname = new Validator('wn-_68_-wsf');
  expect(nickname.validateUsername()).toBe(true);
});
