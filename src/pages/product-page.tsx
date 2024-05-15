import { useParams } from 'react-router-dom';
import { Footer } from '../components/footer';
import { Header } from '../components/header/header';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import {
  getProductByIdAction,
  getReviewsByIdAction,
} from '../store/actions/api-actions';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/use-app-selector';
import {
  getCurrentProduct,
  getisProductByIdLoading,
} from '../store/products-data/products-data.selectors';
import LoadingScreen from './loading-screen/loading-screen';
import { RatingStarList } from '../components/rating-star-list/rating-star-list';
import {
  getReviews,
  getSortingByDateReviews,
  getisReviewsLoading,
} from '../store/reviews-data/reviews-data.selectors';
import { ReviewList } from '../components/review-list/review-list';
import { MAX_COMMENTS_COUNT } from '../const';
import { TReview } from '../types/review';

export function ProductPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(getCurrentProduct);
  const reviews = useAppSelector(getReviews);
  const sortingByDateReviews = useAppSelector(getSortingByDateReviews);
  const isCurrentProductLoading = useAppSelector(getisProductByIdLoading);
  const isReviewsLoading = useAppSelector(getisReviewsLoading);
  const [activeTab, setActiveTab] = useState<string>('Description');
  const [countReviews, setCountReviews] = useState<number>(MAX_COMMENTS_COUNT);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getProductByIdAction(id));
      dispatch(getReviewsByIdAction(id));
    }
  }, [dispatch, id]);

  const onСharacteristicButtonClick = () => {
    setActiveTab('Characteristic');
  };

  const onDescriptionButtonClick = () => {
    setActiveTab('Description');
  };

  const onShowMoreReviewButtonClick = () => {
    setCountReviews(countReviews + MAX_COMMENTS_COUNT);
  };

  function limitReviewsItems(allReviews: TReview[], count: number) {
    if (allReviews.length <= count) {
      return sortingByDateReviews;
    } else {
      return sortingByDateReviews.slice(0, count);
    }
  }

  if (isCurrentProductLoading || !product || isReviewsLoading || !id) {
    return <LoadingScreen />;
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <div className="breadcrumbs">
            <div className="container">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="index.html">
                    Главная
                    <svg width={5} height={8} aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini" />
                    </svg>
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="catalog.html">
                    Каталог
                    <svg width={5} height={8} aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini" />
                    </svg>
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">
                    {product.name}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`../${product.previewImgWebp}, ../${product.previewImgWebp2x} 2x`}
                    />
                    <img
                      src={`../${product.previewImg}`}
                      srcSet={`../${product.previewImg2x} 2x`}
                      width={560}
                      height={480}
                      alt={product.name}
                    />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{product.name}</h1>
                  <RatingStarList
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                  />
                  <p className="product__price">
                    <span className="visually-hidden">Цена:</span>
                    {product.price} ₽
                  </p>
                  <button className="btn btn--purple" type="button">
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket" />
                    </svg>
                    Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      <button
                        className={
                          activeTab === 'Characteristic'
                            ? 'tabs__control is-active'
                            : 'tabs__control'
                        }
                        type="button"
                        onClick={onСharacteristicButtonClick}
                      >
                        Характеристики
                      </button>
                      <button
                        className={
                          activeTab === 'Description'
                            ? 'tabs__control is-active'
                            : 'tabs__control'
                        }
                        type="button"
                        onClick={onDescriptionButtonClick}
                      >
                        Описание
                      </button>
                    </div>
                    <div className="tabs__content">
                      <div
                        className={
                          activeTab === 'Characteristic'
                            ? 'tabs__element is-active'
                            : 'tabs__element'
                        }
                      >
                        <ul className="product__tabs-list">
                          <li className="item-list">
                            <span className="item-list__title">Артикул:</span>
                            <p className="item-list__text">
                              {' '}
                              {product.vendorCode}
                            </p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Категория:</span>
                            <p className="item-list__text">
                              {product.category}
                            </p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">
                              Тип камеры:
                            </span>
                            <p className="item-list__text">{product.type}</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">{product.level}</p>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={
                          activeTab === 'Description'
                            ? 'tabs__element is-active'
                            : 'tabs__element'
                        }
                      >
                        <div className="product__tabs-text">
                          <p>{product.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/*<div class="page-content__section">
      <section class="product-similar">
        <div class="container">
          <h2 class="title title&#45;&#45;h3">Похожие товары</h2>
          <div class="product-similar__slider">
            <div class="product-similar__slider-list">
              <div class="product-card is-active">
                <div class="product-card__img">
                  <picture>
                    <source type="image/webp" srcset="img/content/img9.webp, img/content/img9@2x.webp 2x"><img src="img/content/img9.jpg" srcset="img/content/img9@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5">
                  </picture>
                </div>
                <div class="product-card__info">
                  <div class="rate product-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-star"></use>
                    </svg>
                    <p class="visually-hidden">Рейтинг: 4</p>
                    <p class="rate__count"><span class="visually-hidden">Всего оценок:</span>12</p>
                  </div>
                  <p class="product-card__title">Фотоаппарат FastShot MR-5</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>18 970 ₽
                  </p>
                </div>
                <div class="product-card__buttons">
                  <button class="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                  </button>
                  <a class="btn btn&#45;&#45;transparent" href="#">Подробнее
                  </a>
                </div>
              </div>
              <div class="product-card is-active">
                <div class="product-card__img">
                  <picture>
                    <source type="image/webp" srcset="img/content/img1.webp, img/content/img1@2x.webp 2x"><img src="img/content/img1.jpg" srcset="img/content/img1@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»">
                  </picture>
                </div>
                <div class="product-card__info">
                  <div class="rate product-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-star"></use>
                    </svg>
                    <p class="visually-hidden">Рейтинг: 3</p>
                    <p class="rate__count"><span class="visually-hidden">Всего оценок:</span>23</p>
                  </div>
                  <p class="product-card__title">Ретрокамера «Das Auge IV»</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>73 450 ₽
                  </p>
                </div>
                <div class="product-card__buttons">
                  <button class="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                  </button>
                  <a class="btn btn&#45;&#45;transparent" href="#">Подробнее
                  </a>
                </div>
              </div>
              <div class="product-card is-active">
                <div class="product-card__img">
                  <picture>
                    <source type="image/webp" srcset="img/content/img5.webp, img/content/img5@2x.webp 2x"><img src="img/content/img5.jpg" srcset="img/content/img5@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2">
                  </picture>
                </div>
                <div class="product-card__info">
                  <div class="rate product-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <p class="visually-hidden">Рейтинг: 5</p>
                    <p class="rate__count"><span class="visually-hidden">Всего оценок:</span>849</p>
                  </div>
                  <p class="product-card__title">Фотоаппарат Instaprinter P2</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>8 430 ₽
                  </p>
                </div>
                <div class="product-card__buttons">
                  <button class="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                  </button>
                  <a class="btn btn&#45;&#45;transparent" href="#">Подробнее
                  </a>
                </div>
              </div>
              <div class="product-card">
                <div class="product-card__img">
                  <picture>
                    <source type="image/webp" srcset="img/content/img4.webp, img/content/img4@2x.webp 2x"><img src="img/content/img4.jpg" srcset="img/content/img4@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5">
                  </picture>
                </div>
                <div class="product-card__info">
                  <div class="rate product-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-star"></use>
                    </svg>
                    <p class="visually-hidden">Рейтинг: 4</p>
                    <p class="rate__count"><span class="visually-hidden">Всего оценок:</span>12</p>
                  </div>
                  <p class="product-card__title">Фотоаппарат FastShot MR-5</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>18 970 ₽
                  </p>
                </div>
                <div class="product-card__buttons">
                  <button class="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                  </button>
                  <a class="btn btn&#45;&#45;transparent" href="#">Подробнее
                  </a>
                </div>
              </div>
              <div class="product-card">
                <div class="product-card__img">
                  <picture>
                    <source type="image/webp" srcset="img/content/img3.webp, img/content/img3@2x.webp 2x"><img src="img/content/img3.jpg" srcset="img/content/img3@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»">
                  </picture>
                </div>
                <div class="product-card__info">
                  <div class="rate product-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-star"></use>
                    </svg>
                    <p class="visually-hidden">Рейтинг: 3</p>
                    <p class="rate__count"><span class="visually-hidden">Всего оценок:</span>23</p>
                  </div>
                  <p class="product-card__title">Ретрокамера «Das Auge IV»</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>73 450 ₽
                  </p>
                </div>
                <div class="product-card__buttons">
                  <button class="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                  </button>
                  <a class="btn btn&#45;&#45;transparent" href="#">Подробнее
                  </a>
                </div>
              </div>
              <div class="product-card">
                <div class="product-card__img">
                  <picture>
                    <source type="image/webp" srcset="img/content/img11.webp, img/content/img11@2x.webp 2x"><img src="img/content/img11.jpg" srcset="img/content/img11@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2">
                  </picture>
                </div>
                <div class="product-card__info">
                  <div class="rate product-card__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlink:href="#icon-full-star"></use>
                    </svg>
                    <p class="visually-hidden">Рейтинг: 5</p>
                    <p class="rate__count"><span class="visually-hidden">Всего оценок:</span>849</p>
                  </div>
                  <p class="product-card__title">Фотоаппарат Instaprinter P2</p>
                  <p class="product-card__price"><span class="visually-hidden">Цена:</span>8 430 ₽
                  </p>
                </div>
                <div class="product-card__buttons">
                  <button class="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                  </button>
                  <a class="btn btn&#45;&#45;transparent" href="#">Подробнее
                  </a>
                </div>
              </div>
            </div>
            <button class="slider-controls slider-controls&#45;&#45;prev" type="button" aria-label="Предыдущий слайд" disabled>
              <svg width="7" height="12" aria-hidden="true">
                <use xlink:href="#icon-arrow"></use>
              </svg>
            </button>
            <button class="slider-controls slider-controls&#45;&#45;next" type="button" aria-label="Следующий слайд">
              <svg width="7" height="12" aria-hidden="true">
                <use xlink:href="#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>*/}
          <div className="page-content__section">
            <section className="review-block">
              <div className="container">
                <div className="page-content__headed">
                  <h2 className="title title--h3">Отзывы</h2>
                  {/*<button class="btn" type="button">Оставить свой отзыв</button>*/}
                </div>
                <ReviewList
                  reviews={limitReviewsItems(
                    sortingByDateReviews,
                    countReviews
                  )}
                />
                {reviews.length > countReviews ? (
                  <div className="review-block__buttons">
                    <button
                      className="btn btn--purple"
                      type="button"
                      onClick={onShowMoreReviewButtonClick}
                    >
                      Показать больше отзывов
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
      <a className="up-btn" href="#header">
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2" />
        </svg>
      </a>
      <Footer />
    </div>
  );
}
