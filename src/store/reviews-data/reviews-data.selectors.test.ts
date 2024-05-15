import { describe, it } from 'vitest';
import { NameSpace } from '../../const';
import { makeFakeReview } from '../../utils/mocks';
import { datatype } from 'faker';
import { TReview } from '../../types/review';
import { getReviews, getSortingByDateReviews, getisReviewsLoading } from './reviews-data.selectors';

describe('ReviewsData selectors', () => {
  const mockReviews = new Array(20).fill(null).map(() => makeFakeReview()) as unknown as TReview[];
  const mockSortingByDateReviews = [...mockReviews].sort((a: TReview, b: TReview) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime());
  const state = {
    [NameSpace.Review]: {
      reviews: mockReviews,
      sortingByDateReviews: mockSortingByDateReviews,
      isReviewsDataLoading: datatype.boolean(),
    },
  };

  it('should return reviews list from state', () => {
    const {reviews} = state[NameSpace.Review];
    const result = getReviews(state);
    expect(result).toEqual(reviews);
  });

  it('should return sorting by date reviews list from state', () => {
    const {sortingByDateReviews} = state[NameSpace.Review];
    const result = getSortingByDateReviews(state);
    expect(result).toEqual(sortingByDateReviews);
  });

  it('should return isReviewsDataLoading from state', () => {
    const {isReviewsDataLoading} = state[NameSpace.Review];
    const result = getisReviewsLoading(state);
    expect(result).toEqual(isReviewsDataLoading);
  });
});
