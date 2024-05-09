import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { APIRoute } from '../../const';
import { TProduct } from '../../types/product';

export const getProductsAction = createAsyncThunk<TProduct[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'productData/getProduct',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TProduct[]>(APIRoute.Product);
    return data;
  },
);
