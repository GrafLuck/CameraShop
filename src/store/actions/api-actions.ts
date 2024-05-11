import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { APIRoute } from '../../const';
import { TProduct } from '../../types/product';
import { TReview } from '../../types/review';

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

export const getProductByIdAction = createAsyncThunk<TProduct, string, {
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

export const getReviewsByIdAction = createAsyncThunk<TReview[], string, {
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
