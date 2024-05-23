export enum APIRoute {
  Product = '/cameras',
  Promo = '/promo'
}

export enum NameSpace {
  Product = 'PRODUCT',
  Modal = 'MODAL',
  Review = 'REVIEW',
}

export const MAX_COMMENTS_COUNT = 3;
export const TELEPHONE_PATTERN = /^((8|\+7))([( ]?9\d{2}[) ]?)?[\d]{3}[- ]?[\d]{2}[- ]?[\d]{2}$/g;
export const TELEPHONE_SYMBOL_REPLACE_PATTERN = /[() -]/g;
export const TELEPHONE_FIRST_SYMBOL_REPLACE_PATTERN = /^(8)/g;
