import { store } from '../store/stores';
import { TProduct } from './product';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TProductData = {
  products: TProduct[];
  currentProduct: TProduct | undefined;
  isProductDataLoading: boolean;
}

export type TModalData = {
  isCallModalActive: boolean;
}
