import { render, screen } from '@testing-library/react';
import { ReviewList } from './review-list';
import { makeFakeReview } from '../../utils/mocks';
import { TReview } from '../../types/review';

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const expectedCount = 3;
    const reviewListTestId = 'review-list';
    // const reviewItemTestId = 'review-item';
    const reviews = new Array(expectedCount)
      .fill(null)
      .map(() => makeFakeReview()) as unknown as TReview[];

    render(<ReviewList reviews={reviews} />);

    const reviewList = screen.getByTestId(reviewListTestId);
    // const reviewItem = screen.getAllByTestId(reviewItemTestId);

    expect(reviewList).toBeInTheDocument();
    // expect(reviewItem.length).toBe(expectedCount);
  });
});
