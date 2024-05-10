import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TProductData } from '../../types/state';
import { getProductByIdAction, getProductsAction } from '../actions/api-actions';
import { TProduct } from '../../types/product';

const initialState: TProductData = {
  products: [],
  currentProduct: undefined,
  isProductsDataLoading: true,
  isProductByIdLoading: false,
};

export const productData = createSlice({
  name: NameSpace.Product,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getProductsAction.pending, (state) => {
        state.isProductsDataLoading = true;
      })
      .addCase(getProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductsDataLoading = false;
      })
      .addCase(getProductsAction.rejected, (state) => {
        state.isProductsDataLoading = false;
      })
      .addCase(getProductByIdAction.pending, (state) => {
        state.isProductByIdLoading = true;
      })
      .addCase(getProductByIdAction.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.isProductByIdLoading = false;
      })
      .addCase(getProductByIdAction.rejected, (state) => {
        state.isProductByIdLoading = false;
      });
  },
  reducers: {
    changeCurrentProduct: (state, action: PayloadAction<TProduct>) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { changeCurrentProduct } = productData.actions;
