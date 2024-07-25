import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/itemSlice'; // Adjust path according to structure

export const store = configureStore({
  reducer:{
    item: itemReducer,
  }
});
