import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { signUpReducer } from './auth/slice';

const persistConfig = {
  key: 'contacts',
  storage,
};
const persistSignUpConfig = {
  key: 'signup',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, contactReducer);
const persistedReducerSignUp = persistReducer(
  persistSignUpConfig,
  signUpReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
    signup: persistedReducerSignUp(persistSignUpConfig, signUpReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

// const reduxThunk = store => next => action => {
//   if (typeof action === 'function') {
//     action (store.dispatch)
//   }
//   next(action)
// }
