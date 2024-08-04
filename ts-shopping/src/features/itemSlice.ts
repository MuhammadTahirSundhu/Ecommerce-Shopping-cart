// itemSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
  name: string;
  description: string;
  catagory: string;
  price: string;
  quantity: string;
  isAvailable: boolean;
  discount: string;
  company: string;
  reviews?: string;
  img: string;
}

export interface ItemState {
  items: Item[];
  isdelete:boolean;
  isUpdate: boolean,
}

const initialState: ItemState = {
  items: [],
  isdelete: false,
  isUpdate: false,
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
        console.log("item updated");
        
      }
    },
    setIsdelete(state,action: PayloadAction<boolean>){
      state.isdelete = action.payload;
    },
    setIsUpdate(state,action: PayloadAction<boolean>){
      state.isUpdate = action.payload;
    }

  },
});

export const { AddItem, DeleteItem, UpdateItem , setIsdelete , setIsUpdate} = itemSlice.actions;
export default itemSlice.reducer;
