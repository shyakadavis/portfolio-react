import client from '../api/client';

export const register = (
  surname: string,
  givenName: string,
  email: string,
  password: string,
) => {
  return client.post('user/sign_up', {
    surname,
    givenName,
    email,
    password,
  });
};

export const login = (email: string, password: string) => {
  return client
    .post('user/log_in', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.data[0].token) {
        localStorage.setItem('user', JSON.stringify(response.data.data[0]));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);

  return null;
};
