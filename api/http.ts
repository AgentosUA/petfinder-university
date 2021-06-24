import axios, { AxiosRequestConfig } from 'axios';

const http = ({ headers = {}, ...config }: AxiosRequestConfig) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        baseURL: process.env.API,
        headers: {
          ...headers
        },
        ...config
      });

      return resolve([response.data, response.status]);
    } catch (error) {
      // store.dispatch(criticalError())
      return reject(error);
    }
  })
}


export { http };
