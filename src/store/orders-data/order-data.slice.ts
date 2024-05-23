import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TOrderData } from '../../types/state';
import { createOrderAction } from '../actions/api-actions';

const initialState: TOrderData = {
  isOrdersDataSaving: false,
  error: {},
};

export const orderData = createSlice({
  name: NameSpace.Order,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(createOrderAction.pending, (state) => {
        state.isOrdersDataSaving = true;
      })
      .addCase(createOrderAction.fulfilled, (state) => {
        state.isOrdersDataSaving = false;
      })
      .addCase(createOrderAction.rejected, (state, action) => {
        state.isOrdersDataSaving = false;
        state.error = action.error;
      });
  },
  reducers: {},
});
