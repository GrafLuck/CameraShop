import { TReview } from '../types/review';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

type TReviewProps = {
  review: TReview;
};

export function Review({ review }: TReviewProps) {
  function humanizeDate(date: string) {
    return dayjs(date).locale('ru').format('DD MMMM');
  }

  function formatDate(date: string) {
    return dayjs(date).format('YYYY-MM-DD');
  }

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
      <div className="rate review-card__rate">
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <svg width={17} height={16} aria-hidden="true">
          <use xlinkHref="#icon-full-star" />
        </svg>
        <p className="visually-hidden">Оценка: 5</p>
      </div>
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
