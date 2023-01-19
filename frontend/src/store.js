import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../src/features/login/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});