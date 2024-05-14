import { createAPI } from '../../api/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../../types/state';
import { Action } from 'redux';
import { extractActionsTypes, makeFakeProduct, AppThunkDispatch, makeFakeReview, makeFakePromo } from '../../utils/mocks';
import { getProductByIdAction, getProductsAction, getPromoActions, getReviewsByIdAction } from './api-actions';
import { APIRoute } from '../../const';
import thunk from 'redux-thunk';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  describe('getProductsAction', () => {
    it('should dispatch "getProductsAction.pending" and "getProductsAction.fulfilled" when server response 200', async () => {
      const mockProduct = makeFakeProduct();
      mockAxiosAdapter.onGet(APIRoute.Product).reply(200, mockProduct);

      await store.dispatch(getProductsAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getProductsActionFulfilled = emittedActions.at(1) as ReturnType<typeof getProductsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getProductsAction.pending.type,
        getProductsAction.fulfilled.type,
      ]);

      expect(getProductsActionFulfilled.payload).toEqual(mockProduct);
    });

    it('should dispatch "getProductsAction.pending" and "getProductsAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Product).reply(400, []);

      await store.dispatch(getProductsAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getProductsAction.pending.type,
        getProductsAction.rejected.type,
      ]);
    });
  });

  describe('getProductByIdAction', () => {
    it('should dispatch "getProductByIdAction.pending" and "getProductByIdAction.fulfilled" when server response 200', async () => {
      const mockProduct = makeFakeProduct();
      mockAxiosAdapter.onGet(`${APIRoute.Product}/${mockProduct.id}`).reply(200, mockProduct);

      await store.dispatch(getProductByIdAction(mockProduct.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getProductActionFulfilled = emittedActions.at(1) as ReturnType<typeof getProductByIdAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getProductByIdAction.pending.type,
        getProductByIdAction.fulfilled.type,
      ]);

      expect(getProductActionFulfilled.payload).toEqual(mockProduct);
    });

    it('should dispatch "getProductByIdAction.pending" and "getProductByIdAction.rejected" when server response 400', async () => {
      const mockProduct = makeFakeProduct();
      mockAxiosAdapter.onGet(`${APIRoute.Product}/${mockProduct.id}`).reply(400, []);

      await store.dispatch(getProductByIdAction(mockProduct.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getProductByIdAction.pending.type,
        getProductByIdAction.rejected.type,
      ]);
    });
  });


  describe('getReviewsByIdAction', () => {
    it('should dispatch "getReviewsByIdAction.pending" and "getReviewsByIdAction.fulfilled" when server response 200', async () => {
      const mockReview = makeFakeReview();
      mockAxiosAdapter.onGet(`${APIRoute.Product}/${mockReview.cameraId}/reviews`).reply(200, mockReview);

      await store.dispatch(getReviewsByIdAction(mockReview.cameraId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof getReviewsByIdAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getReviewsByIdAction.pending.type,
        getReviewsByIdAction.fulfilled.type,
      ]);

      expect(getReviewsActionFulfilled.payload).toEqual(mockReview);
    });

    it('should dispatch "getReviewsByIdAction.pending" and "getReviewsByIdAction.rejected" when server response 400', async () => {
      const mockReview = makeFakeReview();
      mockAxiosAdapter.onGet(`${APIRoute.Product}/${mockReview.cameraId}/reviews`).reply(400, []);

      await store.dispatch(getReviewsByIdAction(mockReview.cameraId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getReviewsByIdAction.pending.type,
        getReviewsByIdAction.rejected.type,
      ]);
    });
  });

  describe('getPromoActions', () => {
    it('should dispatch "getPromoActions.pending" and "getPromoActions.fulfilled" when server response 200', async () => {
      const mockPromoProduct = makeFakePromo();
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(200, mockPromoProduct);

      await store.dispatch(getPromoActions());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getPromoProductActionFulfilled = emittedActions.at(1) as ReturnType<typeof getPromoActions.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getPromoActions.pending.type,
        getPromoActions.fulfilled.type,
      ]);

      expect(getPromoProductActionFulfilled.payload).toEqual(mockPromoProduct);
    });

    it('should dispatch "getPromoActions.pending" and "getPromoActions.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(400, []);

      await store.dispatch(getPromoActions());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getPromoActions.pending.type,
        getPromoActions.rejected.type,
      ]);
    });
  });
});
