import axios, {AxiosInstance} from 'axios';
import axiosRetry from 'axios-retry';
import { Agent } from 'https';

axios.defaults.timeout = 15 * 1000;

axiosRetry(axios, {
  retries: 4, 
  retryDelay: axiosRetry.exponentialDelay
});

/**
 * Enables the use of self-signed SSL certificates for development
 */
export function allowUnauthorized(axios: AxiosInstance): AxiosInstance {
  const httpsAgent = new Agent({
    rejectUnauthorized: false,
  })
  axios.defaults.httpsAgent = httpsAgent;
  return axios;
}

export default axios;

