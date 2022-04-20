export type Login = 'AUTH'| 'NO_AUTH'| 'UNKNOWN';

export type AuthData = {
  email: UserEmail,
  password: UserPassword
}

export type UserEmail = string;
export type UserPassword = string;
