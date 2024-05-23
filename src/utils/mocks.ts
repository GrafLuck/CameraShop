import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../api/api';
import { TProduct } from '../types/product';
import { random, datatype, lorem, image, name} from 'faker';
import { State } from '../types/state';
import { TReview } from '../types/review';
import { TPromo } from '../types/promo';
import { TOrder } from '../types/order';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const makeFakeProduct = () : TProduct => ({
  id: datatype.number({
    min: 1,
    max: 100,
  }),
  name: lorem.words(3),
  vendorCode: datatype.uuid(),
  type: random.arrayElement(['Коллекционная', 'Моментальная', 'Цифровая', 'Плёночная']),
  category: random.arrayElement(['Видеокамера', 'Фотоаппарат']),
  description: lorem.words(10),
  level: random.arrayElement(['Нулевой', 'Любительский', 'Профессиональный']),
  price: datatype.number({
    min: 1000,
    max: 100000,
  }),
  rating: datatype.number({
    min: 1,
    max: 5,
  }),
  reviewCount: datatype.number({
    min: 1,
    max: 100,
  }),
  previewImg: image.image(),
  previewImg2x: image.image(),
  previewImgWebp: image.image(),
  previewImgWebp2x: image.image(),
}) as TProduct;

export const makeFakeReview = () : TReview => ({
  id: datatype.uuid(),
  createAt: datatype.datetime().toString(),
  cameraId: datatype.number({
    min: 1,
    max: 100,
  }),
  userName: `${name.firstName()} ${name.lastName()}`,
  advantage: lorem.words(10),
  disadvantage: lorem.words(10),
  review: lorem.words(10),
  rating: datatype.number({
    min: 1,
    max: 5,
  }),
}) as TReview;


export const makeFakePromo = () : TPromo => ({
  id: datatype.number({
    min: 1,
    max: 100,
  }),
  name: lorem.words(3),
  previewImg: image.image(),
  previewImg2x: image.image(),
  previewImgWebp: image.image(),
  previewImgWebp2x: image.image(),
}) as TPromo;

export const makeFakeOrder = () : TOrder => ({
  camerasIds: [datatype.number({
    min: 1,
    max: 100,
  })],
  coupon: '',
  tel: '+79211234567',
});

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({type}) => type);
