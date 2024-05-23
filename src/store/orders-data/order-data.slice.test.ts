import { createOrderAction, getReviewsByIdAction } from '../actions/api-actions';
import { makeFakeOrder, makeFakeReview, makeFakeorder } from '../../utils/mocks';
import { reviewData } from './reviews-data.slice';
import { TReview } from '../../types/review';
import { orderData } from './order-data.slice';

describe('OrderData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      isOrdersDataSaving: false,
      error: {},
    };

    const result = orderData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      isOrdersDataSaving: false,
      error: {},
    };

    const result = orderData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isOrdersDataSaving" to "true" with "createOrderAction.pending" action', () => {
    const expectedState = {
      isOrdersDataSaving: true,
      error: {},
    };

    const result = orderData.reducer(undefined, createOrderAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isOrdersDataSaving" to "false" with "createOrderAction.fulfilled" action', () => {
    const mockOrder = makeFakeOrder();

    const expectedState = {
      isOrdersDataSaving: false,
      error: {},
    };

    const result = orderData.reducer(undefined, createOrderAction.fulfilled(undefined, '', {tel: mockOrder.tel, coupon: '', camerasIds: mockOrder.camerasIds}));

    expect(result).toEqual(expectedState);
  });

//   it('should set "isOrdersDataSaving" to "false" and "error" to error with "createOrderAction.rejected"', () => {
//     const expectedState = {
//       isOrdersDataSaving: false,
//       error: {message: 'Error', code: '400'},
//     };

//     const result = orderData.reducer(undefined, createOrderAction.rejected);

//     expect(result).toEqual(expectedState);
//   });
});
