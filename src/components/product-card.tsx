import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import { changeCallModalStatus } from '../store/modal-data/modal-data.slice';
import { changeCurrentProduct } from '../store/products-data/products-data.slice';
import { TProduct } from '../types/product';
import { RatingStarList } from './rating-star-list/rating-star-list';
import { AppRoute } from '../app-route';

type TProductProps = {
  product: TProduct;
  // onBuyButtonClick: React.MouseEventHandler<HTMLElement>;
};

export function ProductCard({ product }: TProductProps) {
  const dispatch = useAppDispatch();
  const onBuyButtonClick = () => {
    dispatch(changeCurrentProduct(product));
    dispatch(changeCallModalStatus(true));
  };

  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${product.previewImgWebp}, ${product.previewImgWebp2x} 2x`}
          />
          <img
            src={product.previewImg}
            srcSet={`${product.previewImg2x} 2x`}
            width={280}
            height={240}
            alt={product.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <RatingStarList
          rating={product.rating}
          reviewCount={product.reviewCount}
          type={'product'}
        />
        <p className="product-card__title">{product.name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {product.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
          onClick={onBuyButtonClick}
        >
          Купить
        </button>
        <Link
          className="btn btn--transparent"
          to={`${AppRoute.Product}/${product.id}`}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
