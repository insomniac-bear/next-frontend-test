import { createSlice } from '@reduxjs/toolkit';

type TCartItem = {
  id: number;
  count: number;
}

interface IInitialState {
  items: TCartItem[];
}

const initialState: IInitialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => action.payload !== item.id);
    }
  },
});

export const {
  addToCart,
  removeFromCart
} = cartSlice.actions;
