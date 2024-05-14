import { Link } from 'react-router-dom';
import { TPromo } from '../types/promo';
import { AppRoute } from '../app-route';

type TBannerProps = {
  product: TPromo;
};

export function Banner({ product }: TBannerProps) {
  return (
    <div className="banner">
      <picture>
        <source
          type="image/webp"
          srcSet={`${product.previewImgWebp}, ${product.previewImgWebp2x} 2x`}
        />
        <img
          src={product.previewImg}
          srcSet={`${product.previewImg2x} 2x`}
          width={1280}
          height={280}
          alt={product.name}
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{product.name}</span>
        <span className="banner__text">
          Профессиональная камера от&nbsp;известного производителя
        </span>
        <Link className="btn" to={`${AppRoute.Product}/${product.id}`}>
          Подробнее
        </Link>
      </p>
    </div>
  );
}
