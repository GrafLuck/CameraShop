import { getProductByIdAction, getProductsAction, getPromoActions } from '../actions/api-actions';
import { makeFakeProduct, makeFakePromo } from '../../utils/mocks';
import { changeCurrentProduct, productData } from './products-data.slice';
import { TProduct } from '../../types/product';
import { TPromo } from '../../types/promo';

describe('ProductsData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change current product with "changeCurrentProduct" action', () => {
    const initialState = {
      products: [],
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const fakeCurrentProduct = makeFakeProduct();

    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: fakeCurrentProduct,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(initialState, changeCurrentProduct(fakeCurrentProduct));

    expect(result).toEqual(expectedState);
  });

  it('should set "isProductsDataLoading" to "true" with "getProductsAction.pending" action', () => {
    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(undefined, getProductsAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isProductsDataLoading" to "false", "products" to products data with "getProductsAction.fulfilled" action', () => {
    const fakeProducts = new Array(20).fill(null).map(() => makeFakeProduct()) as unknown as TProduct[];

    const expectedState = {
      products: fakeProducts,
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: false,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(undefined, getProductsAction.fulfilled(fakeProducts, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "isProductsDataLoading" to "false" with "getProductsAction.rejected" action', () => {
    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: false,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(undefined, getProductsAction.rejected);

    expect(result).toEqual(expectedState);
  });


  it('should set "isProductByIdLoading" to "true" with "getProductByIdAction.pending" action', () => {
    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: true,
      isProductByIdLoading: true,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(undefined, getProductByIdAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isProductByIdLoading" to "false", "currentProduct" to current product with "getProductByIdAction.fulfilled" action', () => {
    const fakeCurrentProduct = makeFakeProduct();

    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: fakeCurrentProduct,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(undefined, getProductByIdAction.fulfilled(fakeCurrentProduct, '', fakeCurrentProduct.id));

    expect(result).toEqual(expectedState);
  });

  it('should set "isProductByIdLoading" to "false" with "getProductByIdAction.rejected"', () => {
    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(undefined, getProductByIdAction.rejected);

    expect(result).toEqual(expectedState);
  });


  it('should set "isPromoProductsDataLoading" to "true" with "getPromoActions.pending" action', () => {
    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: true,
    };

    const result = productData.reducer(undefined, getPromoActions.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isPromoProductsDataLoading" to "false", "promoProducts" to promo products list with "getPromoActions.fulfilled" action', () => {
    const fakePromoProducts = new Array(3).fill(null).map(() => makeFakePromo()) as unknown as TPromo[];

    const expectedState = {
      products: [],
      promoProducts: fakePromoProducts,
      currentProduct: undefined,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: false,
    };

    const result = productData.reducer(undefined, getPromoActions.fulfilled(fakePromoProducts, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "isPromoProductsDataLoading" to "false" with "getPromoActions.rejected" action', () => {
    const expectedState = {
      products: [],
      promoProducts: [],
      currentProduct: undefined,
      isProductsDataLoading: true,
      isProductByIdLoading: false,
      isPromoProductsDataLoading: false,
    };

    const result = productData.reducer(undefined, getPromoActions.rejected);

    expect(result).toEqual(expectedState);
  });
});
