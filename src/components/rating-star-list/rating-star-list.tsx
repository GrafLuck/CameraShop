import { RatingStar } from '../rating-star/rating-star';

type TRatingStarListProps = {
  rating: number;
  reviewCount: number;
};

export function RatingStarList({ rating, reviewCount }: TRatingStarListProps) {
  function makeRatingStarList(rate: number): JSX.Element[] {
    const ratingStarList = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        ratingStarList.push(<RatingStar isChecked key={i} />);
      } else {
        ratingStarList.push(<RatingStar isChecked={false} key={i} />);
      }
    }
    return ratingStarList;
  }

  return (
    <div className="rate product-card__rate">
      {makeRatingStarList(rating)}
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>
        {reviewCount}
      </p>
    </div>
  );
}
