import { describe, it } from 'vitest';
import { NameSpace } from '../../const';
import { getIsOrdersDataSaving, getOrderSavingError } from './order-data.selectors';

describe('OrderData selectors', () => {
  const state = {
    [NameSpace.Order]: {
      error: {message: 'Error', code: '201'},
      isOrdersDataSaving: false,
    },
  };

  it('should return error from state', () => {
    const {error} = state[NameSpace.Order];
    const result = getOrderSavingError(state);
    expect(result).toEqual(error);
  });

  it('should return isOrdersDataSaving from state', () => {
    const {isOrdersDataSaving} = state[NameSpace.Order];
    const result = getIsOrdersDataSaving(state);
    expect(result).toEqual(isOrdersDataSaving);
  });
});
