import { combineReducers } from 'redux';
import { goodsSlice } from './goods';
import { favoritesSlice } from './favorites';
import { cartSlice } from './cart';

export const rootReducer = combineReducers({
  goods: goodsSlice.reducer,
  favorites: favoritesSlice.reducer,
  cart: cartSlice.reducer,
})
