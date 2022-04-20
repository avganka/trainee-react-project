import { UserEmail } from '../types/login';

const USER_EMAIL = 'user_email';

export const saveEmail = (email: UserEmail) => {
  localStorage.setItem(USER_EMAIL, email);
};

export const getEmail = () => {
  const email = localStorage.getItem(USER_EMAIL);
  return email ?? '';
};

export const removeEmail = () => {
  localStorage.removeItem(USER_EMAIL);
};

