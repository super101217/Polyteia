import axios, { AxiosError, Method } from 'axios';

interface RequestData {
  url: string;
  method: Method;
  data?: unknown;
}

export const request = async ({ url, method, data }: RequestData) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  try {
    const response = await axios({
      url,
      method,
      data,
      timeout: 60000,
      baseURL: apiUrl,
    });
    return response;
  } catch (err: unknown) {
    if (err instanceof AxiosError) throw new Error(err.code);
    else {
      throw new Error('UNKNOWN_ERROR');
    }
  }
};
