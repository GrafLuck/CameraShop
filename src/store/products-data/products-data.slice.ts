import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TProductData } from '../../types/state';
import { getProductByIdAction, getProductsAction, getPromoActions } from '../actions/api-actions';
import { TProduct } from '../../types/product';

const initialState: TProductData = {
  products: [],
  promoProducts: [],
  currentProduct: undefined,
  isProductsDataLoading: true,
  isProductByIdLoading: false,
  isPromoProductsDataLoading: true,
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
      })
      .addCase(getPromoActions.pending, (state) => {
        state.isPromoProductsDataLoading = true;
      })
      .addCase(getPromoActions.fulfilled, (state, action) => {
        state.promoProducts = action.payload;
        state.isPromoProductsDataLoading = false;
      })
      .addCase(getPromoActions.rejected, (state) => {
        state.isPromoProductsDataLoading = false;
      });
  },
  reducers: {
    changeCurrentProduct: (state, action: PayloadAction<TProduct>) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { changeCurrentProduct } = productData.actions;
