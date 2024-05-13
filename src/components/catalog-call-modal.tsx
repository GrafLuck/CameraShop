import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import { useAppSelector } from '../hooks/use-app-selector';
import { changeCallModalStatus } from '../store/modal-data/modal-data.slice';
import { getCurrentProduct } from '../store/products-data/products-data.selectors';
import { getIsCallModalActive } from '../store/modal-data/modal-data.selectors';

export function CatalogCallModal() {
  const dispatch = useAppDispatch();
  const product = useAppSelector(getCurrentProduct);
  const isActive = useAppSelector(getIsCallModalActive);
  const overlay = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onOverlayClick = (evt: MouseEvent) => {
      const { current: target } = overlay;
      if (target && target.contains(evt.target as HTMLElement)) {
        dispatch(changeCallModalStatus(false));
      }
    };

    const onEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(changeCallModalStatus(false));
      }
    };

    window.addEventListener('click', onOverlayClick);
    window.addEventListener('keydown', onEscapePress);

    return () => {
      window.removeEventListener('click', onOverlayClick);
      window.removeEventListener('keydown', onEscapePress);
    };
  }, [dispatch]);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '17px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isActive]);

  const onCloseButtonClick = () => {
    dispatch(changeCallModalStatus(false));
  };

  if (!product) {
    return;
  }

  return (
    <div className={isActive ? ' modal is-active' : 'modal'}>
      <div className="modal__wrapper">
        <div className="modal__overlay" ref={overlay} />
        <div className="modal__content">
          <p className="title title--h4">Свяжитесь со мной</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${product.previewImgWebp}, ${product.previewImgWebp2x} 2x`}
                />
                <img
                  src={product.previewImg}
                  srcSet={`${product.previewImg2x} 2x`}
                  width={140}
                  height={120}
                  alt={product.name}
                />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{product.name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул: </span>
                  <span className="basket-item__number">
                    {product.vendorCode}
                  </span>
                </li>
                <li className="basket-item__list-item">
                  {product.type} фотокамера
                </li>
                <li className="basket-item__list-item">
                  {product.level} уровень
                </li>
              </ul>
              <p className="basket-item__price">
                <span className="visually-hidden">Цена: </span>
                {product.price} ₽
              </p>
            </div>
          </div>
          <div className="custom-input form-review__item">
            <label>
              <span className="custom-input__label">
                Телефон
                <svg width={9} height={9} aria-hidden="true">
                  <use xlinkHref="#icon-snowflake" />
                </svg>
              </span>
              <input
                type="tel"
                name="user-tel"
                placeholder="Введите ваш номер"
                required
                autoFocus
              />
            </label>
            <p className="custom-input__error">Нужно указать номер</p>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
            >
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>
              Заказать
            </button>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={onCloseButtonClick}
          >
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
