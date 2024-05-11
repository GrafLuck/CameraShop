import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { productData } from './products-data/products-data.slice';
import { modalData } from './modal-data/modal-data.slice';
import { reviewData } from './reviews-data/reviews-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.Product]: productData.reducer,
  [NameSpace.Modal]: modalData.reducer,
  [NameSpace.Review]: reviewData.reducer,
});
