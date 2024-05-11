import { store } from '../store/stores';
import { TProduct } from './product';
import { TReview } from './review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TProductData = {
  products: TProduct[];
  currentProduct: TProduct | undefined;
  isProductsDataLoading: boolean;
  isProductByIdLoading: boolean;
}

export type TModalData = {
  isCallModalActive: boolean;
}

export type TReviewData = {
  reviews: TReview[];
  isReviewsDataLoading: boolean;
}
