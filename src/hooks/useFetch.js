import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const useFetch = () => {
  return useContext(GlobalContext);
};

export default useFetch;
