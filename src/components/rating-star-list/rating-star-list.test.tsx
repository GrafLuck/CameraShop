import { render, screen } from '@testing-library/react';
import { RatingStarList } from './rating-star-list';

describe('Component: RatingStarList', () => {
  it('should render correct', () => {
    const reviewCount = 10;
    const rating = 4;
    const countStars = 5;

    const { container } = render(
      <RatingStarList reviewCount={reviewCount} rating={rating} />
    );

    expect(screen.getByText('Всего оценок:')).toBeInTheDocument();
    expect(screen.getByText(`${reviewCount}`)).toBeInTheDocument();
    expect(container.querySelectorAll('svg').length).toBe(countStars);
  });
});
