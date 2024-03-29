import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// // додати токен в строку http:
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUpThunk = createAsyncThunk(
  '/users/signup',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      if (e.response.status === 400) {
        alert('Invalid email or password. Please try again.');
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  '/users/login',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      if (e.response.status === 400) {
        alert('Invalid email or password. Please try again.');
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  '/users/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');
      clearAuthHeader();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.signup.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    setAuthHeader(persistedToken);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
