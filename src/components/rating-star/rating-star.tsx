type TRatingStarProps = {
  isChecked: boolean;
};

export function RatingStar({ isChecked }: TRatingStarProps) {
  return (
    <svg width={17} height={16} aria-hidden="true">
      <use xlinkHref={isChecked ? '#icon-full-star' : '#icon-star'} />
    </svg>
  );
}
