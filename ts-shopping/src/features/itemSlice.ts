// itemSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  discount: string;
  company:string
  reviews?: number;
}

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    AddItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
    },
    DeleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    UpdateItem(state, action: PayloadAction<Item>) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    }
  },
});

export const { AddItem, DeleteItem, UpdateItem} = itemSlice.actions;
export default itemSlice.reducer;
