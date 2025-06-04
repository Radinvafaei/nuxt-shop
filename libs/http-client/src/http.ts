import HttpClient from './client';
import { LoggerMiddleware } from './middlewares';

const baseURL = `https://fakestoreapi.com`;
const userClient = new HttpClient({
  baseURL,
});

userClient.middlewares.add(new LoggerMiddleware());
userClient.boot();
export { userClient, baseURL };
