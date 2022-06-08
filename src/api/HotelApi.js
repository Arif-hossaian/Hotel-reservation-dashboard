import Axios from 'axios';
import { baseURL } from './baseURL';

export const allHotelsApi = async () => {
  return await Axios.get(`${baseURL}/hotels`);
};
