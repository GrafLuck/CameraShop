import { SerializedError } from '@reduxjs/toolkit';
import { store } from '../store/stores';
import { TProduct } from './product';
import { TPromo } from './promo';
import { TReview } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TProductData = {
  products: TProduct[];
  promoProducts: TPromo[];
  currentProduct: TProduct | undefined;
  isProductsDataLoading: boolean;
  isProductByIdLoading: boolean;
  isPromoProductsDataLoading: boolean;
}

export type TModalData = {
  isCallModalActive: boolean;
}

export type TReviewData = {
  reviews: TReview[];
  sortingByDateReviews: TReview[];
  isReviewsDataLoading: boolean;
}

export type TOrderData = {
  error: SerializedError;
  isOrdersDataSaving: boolean;
}
