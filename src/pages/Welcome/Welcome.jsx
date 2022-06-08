import { Grid } from '@mui/material';
import React from 'react';
import AdminCountCard from '../../components/AdminCountCard/AdminCountCard';
import HotelCountCard from '../../components/HotelCountCard/HotelCountCard';
import UserCountCard from '../../components/UserCountCard/UserCountCard';

const Welcome = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <HotelCountCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <UserCountCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <AdminCountCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
