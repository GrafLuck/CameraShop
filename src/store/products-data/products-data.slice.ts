import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TProductData } from '../../types/state';
import { getProductsAction } from '../actions/api-actions';
import { TProduct } from '../../types/product';

const initialState: TProductData = {
  products: [],
  currentProduct: undefined,
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
  reducers: {
    changeCurrentProduct: (state, action: PayloadAction<TProduct>) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { changeCurrentProduct } = productData.actions;
