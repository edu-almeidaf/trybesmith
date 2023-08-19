const validPassword = 'terrível';
const emptyUsername = { username: '', password: validPassword };

const validUsername = 'Hagar';
const emptyPassword = { username: validUsername, password: '' };

const wrongUser = { username: 'Thor', password: validPassword };

const userWithWrongPassword = { username: validUsername, password: 'xablau' };

const hashedPassword = '$2a$10$i9ZegNJNtGfQAycxb1DtUu159YhpKREFDZQ6bTnFGNsCK0Fs1YYVW';
const existingUser = {
  id: 1,
  username: validUsername,
  vocation: 'Guerreiro',
  password: hashedPassword,
  level: 10,
}

const validLoginBody = { username: validUsername, password: validPassword };

export default {
  emptyUsername,
  emptyPassword,
  wrongUser,
  userWithWrongPassword,
  existingUser,
  validLoginBody
}