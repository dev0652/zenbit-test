import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { propertiesReducer } from './properties/slice';
import { authReducer } from './auth/slice';

// ###############################################

// Persisting token field from auth slice to localStorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// #######################################################

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    properties: propertiesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
