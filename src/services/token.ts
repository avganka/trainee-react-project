const AUTH_TOKEN = 'six-cities-token';

export type Token = string;

export const saveToken = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const getToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return token ?? '';
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

