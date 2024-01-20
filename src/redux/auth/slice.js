const { createSlice } = require('@reduxjs/toolkit');
const {
  signUpThunk,
  logInThunk,
  logOutThunk,
  refreshUserThunk,
} = require('./thunks');

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.error = null;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.error = null;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const signUpReducer = signUpSlice.reducer;
