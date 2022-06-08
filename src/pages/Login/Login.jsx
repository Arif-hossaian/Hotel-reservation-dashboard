import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Card,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../api/baseURL';
import useFetch from '../../hooks/useFetch';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useFetch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(`${baseURL}/auth/login`, credentials);
      if (res.data.isAdmin) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
        navigate('/');
      } else {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: { message: 'You are not allowed!' },
        });
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(#e66465, #9198e5)',
        height: '105.9vh',
      }}
    >
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 20, mx: 'auto' }} xs={11} md={4} lg={3}>
          {/* <Box sx={{ textAlign: 'center', mb: 2 }}>
            <img
              src="https://i.ibb.co/qLG7Gj2/reservation.png"
              style={{ width: '100px', height: '100px' }}
              alt="Hotel Reservation"
            />
          </Box> */}
          <Card sx={{ p: 5, textAlign: 'center', boxShadow: 5 }}>
            <Typography variant="h5" gutterBottom>
              Login to Admin Panel
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ width: '100%', m: 1 }}
                type="text"
                id="username"
                label="Your Username"
                onChange={handleChange}
                required
                variant="standard"
              />
              <TextField
                sx={{ width: '100%', m: 1 }}
                id="password"
                label="Your Password"
                type="password"
                onChange={handleChange}
                required
                variant="standard"
              />

              {loading ? (
                <CircularProgress />
              ) : (
                <Button
                  sx={{ width: '75%', m: 2, textAlign: 'center' }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              )}
              <p ref={error}>
                {error && <Alert severity="error">{error.message}</Alert>}
              </p>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
