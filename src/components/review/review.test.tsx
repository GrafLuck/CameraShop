import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/mock-components';
import { Review } from './review';
import { makeFakeReview } from '../../utils/mocks';
import { humanizeDate } from '../../utils/util';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const fakeReview = makeFakeReview();
    const titleAdvantage = 'Достоинства:';
    const titleDisadvantage = 'Недостатки:';
    const titleReview = 'Комментарий:';

    const textAdvantage = fakeReview.advantage;
    const textDisadvantage = fakeReview.disadvantage;
    const textReview = fakeReview.review;

    const reviewDate = humanizeDate(fakeReview.createAt);

    renderWithRouter(<Review review={fakeReview} />);
    expect(screen.getByText(titleAdvantage)).toBeInTheDocument();
    expect(screen.getByText(titleDisadvantage)).toBeInTheDocument();
    expect(screen.getByText(titleReview)).toBeInTheDocument();
    expect(screen.getByText(textAdvantage)).toBeInTheDocument();
    expect(screen.getByText(textDisadvantage)).toBeInTheDocument();
    expect(screen.getByText(textReview)).toBeInTheDocument();
    expect(screen.getByText(reviewDate)).toBeInTheDocument();
  });
});
