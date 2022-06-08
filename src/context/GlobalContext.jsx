import { createContext, useEffect, useState, useReducer } from 'react';
import { allUserApi } from '../api/AllUserApi';
import { allHotelsApi } from '../api/HotelApi';
import { Reducer } from './reducer/Reducers';
import { allRoomsApi } from '../api/RoomApi';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const { user, loading, error } = state;
  const [userList, setUserList] = useState([]);
  const [adminList, setAdminList] = useState([]);
  const [list, setList] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const getAllUsers = async () => {
    setIsDataLoading(true);
    const response = await allUserApi();
    setList(response.data);
    response.data.forEach((data) => {
      if (data.isAdmin === true) {
        setAdminList([...adminList, data]);
        //console.log(data);
      } else {
        setUserList([...userList, data]);
      }
    });
    setIsDataLoading(false);
  };

  const getAllHotels = async () => {
    setIsDataLoading(true);
    const response = await allHotelsApi();
    setHotels(response.data);
    setIsDataLoading(false);
  };

  const getAllRooms = async () => {
    setIsDataLoading(true);
    const response = await allRoomsApi();
    setRooms(response.data);
    setIsDataLoading(false);
  };

  useEffect(() => {
    getAllUsers();
    getAllHotels();
    getAllRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        loading,
        error,
        list,
        hotels,
        rooms,
        isDataLoading,
        adminList,
        userList,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
