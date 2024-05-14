import { NameSpace } from '../../const';
import { TProduct } from '../../types/product';
import { TPromo } from '../../types/promo';
import { State } from '../../types/state';

export const getProducts = (state: Pick<State, NameSpace.Product>): TProduct[] => state[NameSpace.Product].products;
export const getCurrentProduct = (state: Pick<State, NameSpace.Product>): TProduct | undefined => state[NameSpace.Product].currentProduct;
export const getPromoProducts = (state: Pick<State, NameSpace.Product>): TPromo[] => state[NameSpace.Product].promoProducts;
export const getisProductsDataLoading = (state: Pick<State, NameSpace.Product>): boolean => state[NameSpace.Product].isProductsDataLoading;
export const getisProductByIdLoading = (state: Pick<State, NameSpace.Product>): boolean => state[NameSpace.Product].isProductByIdLoading;
export const getisPromoProductsDataLoading = (state: Pick<State, NameSpace.Product>): boolean => state[NameSpace.Product].isPromoProductsDataLoading;

