import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TReviewData } from '../../types/state';
import { getReviewsByIdAction } from '../actions/api-actions';

const initialState: TReviewData = {
  reviews: [],
  isReviewsDataLoading: true,
};

export const reviewData = createSlice({
  name: NameSpace.Review,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getReviewsByIdAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(getReviewsByIdAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(getReviewsByIdAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
      });
  },
  reducers: {},
});
