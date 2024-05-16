import { TReview } from '../../types/review';
import { formatDate, humanizeDate } from '../../utils/util';
import { RatingStarList } from '../rating-star-list/rating-star-list';

type TReviewProps = {
  review: TReview;
};

export function Review({ review }: TReviewProps) {
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{review.userName}</p>
        <time
          className="review-card__data"
          dateTime={formatDate(review.createAt)}
        >
          {humanizeDate(review.createAt)}
        </time>
      </div>
      <RatingStarList rating={review.rating} reviewCount={0} type={'review'} />
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{review.advantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{review.disadvantage}</p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review.review}</p>
        </li>
      </ul>
    </li>
  );
}
