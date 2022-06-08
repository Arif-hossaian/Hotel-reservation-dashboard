import Axios from 'axios';
import { baseURL } from './baseURL';

export const allUserApi = async () => {
  return await Axios.get(`${baseURL}/users`);
};
