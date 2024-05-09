import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { productData } from './products-data/products-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.Product]: productData.reducer,
});
