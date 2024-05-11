import { TReview } from '../types/review';
import { Review } from './review';

type TReviewListProps = {
  reviews: TReview[];
};

export function ReviewList({ reviews }: TReviewListProps) {
  return (
    <ul className="review-block__list">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
  );
}
