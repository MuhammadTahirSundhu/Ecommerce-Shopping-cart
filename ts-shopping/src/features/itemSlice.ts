import { createSlice } from '@reduxjs/toolkit'

// interface item {

//     id: any,
//     name: string,
//     description: string,
//     price: number,
//     quantity: number,
//     isAvailable: boolean,
//     discount: string,
//     reviews: any,

// }

const initialState: { items: object[] } = {
    items: [],    
}

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        AddItem(state, action) {
            state.items.push(action.payload);
        },
        DeleteItem(state, action) {
            if (state.items.length > 0)
                state.items = state.items.filter(item => item.id !== action.payload);
        },
        UpdateItem(state, action) {
            const updateItem = state.items.find(item => item.id === action.payload.id);
            if (updateItem) {
                Object.assign(updateItem, action.payload);
            }
        },
    }
});

export const {AddItem,DeleteItem,UpdateItem} = itemSlice.actions;
export default itemSlice.reducer;