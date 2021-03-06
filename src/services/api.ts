import axios, { AxiosInstance } from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://9.react.pages.academy/six-cities';
const TIMEOUT = 5000;


export const createAPI = ():AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    });

  return api;
};

