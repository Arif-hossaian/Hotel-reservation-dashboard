import React from 'react';
import { CircularProgress } from '@mui/material';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const PrivateRoute = () => {
  const { user, loading } = useFetch();
  let location = useLocation();
  if (loading) {
    return <CircularProgress />;
  }
  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
