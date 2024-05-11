import { NameSpace } from '../../const';
import { TReview } from '../../types/review';
import { State } from '../../types/state';

export const getReviews = (state: Pick<State, NameSpace.Review>): TReview[] => state[NameSpace.Review].reviews;
export const getisReviewsLoading = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].isReviewsDataLoading;
