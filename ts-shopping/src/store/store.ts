import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer, { ItemState } from '../features/itemSlice';  // Import ItemState

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, itemReducer);

const store = configureStore({
  reducer: {
    items: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

const persistor = persistStore(store);

export default store;
export { persistor };
export type RootState = {
  items: ItemState;
} & ReturnType<typeof store.getState>;
