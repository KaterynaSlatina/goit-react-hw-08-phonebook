import { createSlice } from '@reduxjs/toolkit';
import {
  signUpThunk,
  logInThunk,
  logOutThunk,
  refreshUserThunk,
} from './thunks';

const initialState = {
  token: '',
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = '';
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false;
        state.token = '';
        state.user = null;
      });
  },
});

export const signUpReducer = signUpSlice.reducer;
