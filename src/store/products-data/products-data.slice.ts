import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TProductData } from '../../types/state';
import { getProductsAction } from '../actions/api-actions';

const initialState: TProductData = {
  products: [],
  isProductDataLoading: true,
};

export const productData = createSlice({
  name: NameSpace.Product,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getProductsAction.pending, (state) => {
        state.isProductDataLoading = true;
      })
      .addCase(getProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductDataLoading = false;
      })
      .addCase(getProductsAction.rejected, (state) => {
        state.isProductDataLoading = false;
      });
  },
  reducers: {},
});
