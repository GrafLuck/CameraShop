import { useAppDispatch } from '../hooks/use-app-dispatch';
import { changeCallModalStatus } from '../store/modal-data/modal-data.slice';

type TCatalogCallModalProps = {
  isActive: boolean;
};

export function CatalogCallModal({ isActive }: TCatalogCallModalProps) {
  const dispatch = useAppDispatch();

  const onCloseButtonClick = () => {
    dispatch(changeCallModalStatus(false));
  };

  return (
    <div className={isActive ? ' modal is-active' : 'modal'}>
      <div className="modal__wrapper">
        <div className="modal__overlay" />
        <div className="modal__content">
          <p className="title title--h4">Свяжитесь со мной</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" srcSet={''} />
                <img src={''} srcSet={''} width={140} height={120} alt={''} />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title"></p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул:</span>{' '}
                  <span className="basket-item__number"></span>
                </li>
                <li className="basket-item__list-item">фотокамера</li>
                <li className="basket-item__list-item">уровень</li>
              </ul>
              <p className="basket-item__price">
                <span className="visually-hidden">Цена:</span>₽
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
