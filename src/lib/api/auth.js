import client, { makeParam } from './client';

export const login = ({ username, password }) => {
  const param = makeParam({ userId: username, password });
  console.log('login : ' + username + ', param : ' + param);
  return client.postUrl('/json/login', param);
};

export const register = ({ username, password }) => {
  console.log('register : ' + username);
  return client.post('/api/auth/register', { username, password });
};

export const check = () => {
  return client.get('/json/validation');
};

export const logout = () => {
  return client.get('/json/logout');
};
