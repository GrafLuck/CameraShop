import { getReviewsByIdAction } from '../actions/api-actions';
import { makeFakeReview } from '../../utils/mocks';
import { reviewData } from './reviews-data.slice';
import { TReview } from '../../types/review';

describe('ReviewsData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      reviews: [],
      sortingByDateReviews: [],
      isReviewsDataLoading: true,
    };

    const result = reviewData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      reviews: [],
      sortingByDateReviews: [],
      isReviewsDataLoading: true,
    };

    const result = reviewData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "true" with "getReviewsByIdAction.pending" action', () => {
    const expectedState = {
      reviews: [],
      sortingByDateReviews: [],
      isReviewsDataLoading: true,
    };

    const result = reviewData.reducer(undefined, getReviewsByIdAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "false", "reviews" to reviews list, "sortingByDateReviews" to sorting by Date reviews with "getReviewsByIdAction.fulfilled" action', () => {
    const fakeReviews = new Array(10).fill(null).map(() => makeFakeReview()) as unknown as TReview[];

    const expectedState = {
      reviews: fakeReviews,
      sortingByDateReviews: [...fakeReviews].sort((a: TReview, b: TReview) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()),
      isReviewsDataLoading: false,
    };

    const result = reviewData.reducer(undefined, getReviewsByIdAction.fulfilled(fakeReviews, '', fakeReviews[0].cameraId));

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "false" with "getReviewsByIdAction.rejected"', () => {
    const expectedState = {
      reviews: [],
      sortingByDateReviews: [],
      isReviewsDataLoading: false,
    };

    const result = reviewData.reducer(undefined, getReviewsByIdAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
