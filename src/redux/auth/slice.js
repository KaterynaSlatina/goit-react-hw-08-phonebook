import { createSlice } from '@reduxjs/toolkit';
const {
  signUpThunk,
  logInThunk,
  logOutThunk,
  refreshUserThunk,
} = require('./thunks');

const initialState = {
  isLoading: false,
  error: '',
  token: '',
  user: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logInThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.error = null;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.error = null;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(logOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const signUpReducer = signUpSlice.reducer;
