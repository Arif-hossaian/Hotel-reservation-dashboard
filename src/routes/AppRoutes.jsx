import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../utilities/PrivateRoute';
import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/Login/Login';
import PageNotFound from '../pages/404/PageNotFound';
import DashboardLayout from '../layout/DashboardLayout';
import AllUsers from '../pages/AllUsers/AllUsers';
import AllHotels from '../pages/AllHotels/AllHotels';
import AddHotel from '../pages/AddHotel/AddHotel';
import AllRooms from '../pages/AllRooms/AllRooms';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/hotels" element={<AllHotels />} />
            <Route path="/addNew" element={<AddHotel />} />
            <Route path="/rooms" element={<AllRooms />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
