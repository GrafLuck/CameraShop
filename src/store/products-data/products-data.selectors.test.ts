import { describe, it } from 'vitest';
import { NameSpace } from '../../const';
import { makeFakeProduct, makeFakePromo } from '../../utils/mocks';
import { datatype } from 'faker';
import { TProduct } from '../../types/product';
import { TPromo } from '../../types/promo';
import { getCurrentProduct, getProducts, getPromoProducts, getisProductByIdLoading, getisProductsDataLoading, getisPromoProductsDataLoading } from './products-data.selectors';

describe('ProductsData selectors', () => {
  const mockProducts = new Array(20).fill(null).map(() => makeFakeProduct()) as unknown as TProduct[];
  const mockPromoProducts = new Array(3).fill(null).map(() => makeFakePromo()) as unknown as TPromo[];
  const state = {
    [NameSpace.Product]: {
      products: mockProducts,
      promoProducts: mockPromoProducts,
      currentProduct: mockProducts[0],
      isProductsDataLoading: datatype.boolean(),
      isProductByIdLoading: datatype.boolean(),
      isPromoProductsDataLoading: datatype.boolean(),
    },
  };

  it('should return products list from state', () => {
    const {products} = state[NameSpace.Product];
    const result = getProducts(state);
    expect(result).toEqual(products);
  });

  it('should return promo products list from state', () => {
    const {promoProducts} = state[NameSpace.Product];
    const result = getPromoProducts(state);
    expect(result).toEqual(promoProducts);
  });

  it('should return current product from state', () => {
    const {currentProduct} = state[NameSpace.Product];
    const result = getCurrentProduct(state);
    expect(result).toEqual(currentProduct);
  });

  it('should return isProductsDataLoading from state', () => {
    const {isProductsDataLoading} = state[NameSpace.Product];
    const result = getisProductsDataLoading(state);
    expect(result).toEqual(isProductsDataLoading);
  });

  it('should return isProductByIdLoading from state', () => {
    const {isProductByIdLoading} = state[NameSpace.Product];
    const result = getisProductByIdLoading(state);
    expect(result).toEqual(isProductByIdLoading);
  });

  it('should return isPromoProductsDataLoading from state', () => {
    const {isPromoProductsDataLoading} = state[NameSpace.Product];
    const result = getisPromoProductsDataLoading(state);
    expect(result).toEqual(isPromoProductsDataLoading);
  });
});
