import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { APIRoute } from '../../const';
import { TProduct } from '../../types/product';
import { TReview } from '../../types/review';
import { TPromo } from '../../types/promo';
import { TOrder } from '../../types/order';

export const getProductsAction = createAsyncThunk<TProduct[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'productData/getProducts',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TProduct[]>(APIRoute.Product);
    return data;
  },
);

export const getProductByIdAction = createAsyncThunk<TProduct, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'productData/getProductById',
  async (id, {extra: api}) => {
    const {data} = await api.get<TProduct>(`${APIRoute.Product}/${id}`);
    return data;
  },
);

export const getReviewsByIdAction = createAsyncThunk<TReview[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviewData/getReviewsById',
  async (id, {extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Product}/${id}/reviews`);
    return data;
  },
);

export const getPromoActions = createAsyncThunk<TPromo[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'productData/getPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TPromo[]>(APIRoute.Promo);
    return data;
  },
);

export const createOrderAction = createAsyncThunk<void, TOrder, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'orderData/createOrder',
  async ({camerasIds, tel}, {extra: api}) => {
    await api.post<void>(APIRoute.Order, {camerasIds: camerasIds, coupon: null, tel: tel});
  },
);
