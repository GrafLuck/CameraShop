import { TReview } from '../../types/review';
import { Review } from '../review/review';

type TReviewListProps = {
  reviews: TReview[];
};

export function ReviewList({ reviews }: TReviewListProps) {
  return (
    <ul className="review-block__list" data-testid="review-list">
      {reviews.map((review) => (
        <Review review={review} key={review.id} data-testid="review-item" />
      ))}
    </ul>
  );
}
