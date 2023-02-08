import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  items: number[];
}

const initialState: IInitialState = {
  items: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.items.push(action.payload);
    },
    removeFavorite(state, action) {
      state.items = state.items.filter(item => action.payload !== item);
    }
  },
});

export const {
  addFavorite,
  removeFavorite
} = favoritesSlice.actions;
