import Axios from 'axios';
import { baseURL } from './baseURL';

export const allRoomsApi = async () => {
  return await Axios.get(`${baseURL}/rooms`);
};
