import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './contentDataSlice.ts';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

// Infer types for usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
