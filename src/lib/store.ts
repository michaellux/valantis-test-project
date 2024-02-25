import { configureStore,  createSlice, ThunkAction, Action, PayloadAction } from '@reduxjs/toolkit';
import productSlice from '../lib/features/goodsSlice'; 
export const store = () => configureStore({
  reducer: productSlice,
});

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
