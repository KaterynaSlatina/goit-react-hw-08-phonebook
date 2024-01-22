import { filterReducer } from './contacts/filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactsSlice';

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

const persistSignUpConfig = {
  key: 'signup',
  storage,
  whitelist: ['token'],
};
//
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    signup: persistReducer(persistSignUpConfig, signUpReducer),
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
