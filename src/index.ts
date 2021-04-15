import axios, {AxiosInstance} from 'axios';
import axiosRetry from 'axios-retry';
import { Agent } from 'https';

const instance = axios.create({
  timeout: 15 * 1000, 
  httpsAgent: new Agent({
    rejectUnauthorized: process.env.NODE_ENV !== 'development'
  })
});

axiosRetry(instance, {
  retries: 4, 
  retryDelay: axiosRetry.exponentialDelay
});

export default instance;

