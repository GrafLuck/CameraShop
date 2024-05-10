import { NameSpace } from '../../const';
import { TProduct } from '../../types/product';
import { State } from '../../types/state';

export const getProducts = (state: Pick<State, NameSpace.Product>): TProduct[] => state[NameSpace.Product].products;
export const getIsProductDataLoading = (state: Pick<State, NameSpace.Product>): boolean => state[NameSpace.Product].isProductDataLoading;
