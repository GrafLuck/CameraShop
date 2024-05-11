import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TReviewData } from '../../types/state';
import { getReviewsByIdAction } from '../actions/api-actions';
import { TReview } from '../../types/review';

const initialState: TReviewData = {
  reviews: [],
  sortingByDateReviews: [],
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
        state.sortingByDateReviews = [...action.payload].sort((a: TReview, b: TReview) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime());
        state.isReviewsDataLoading = false;
      })
      .addCase(getReviewsByIdAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
      });
  },
  reducers: {},
});
