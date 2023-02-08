import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IItem } from "../types/item.types"
import { getGoodsApi } from "../api";

interface IInitialState {
  goods: IItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

const initialState: IInitialState = {
  goods: [],
  status: 'idle',
  error: undefined,
}

export const fetchGoods = createAsyncThunk('goods/get', async () => {
  const response = await getGoodsApi();
  return response;
})

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.goods = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});
