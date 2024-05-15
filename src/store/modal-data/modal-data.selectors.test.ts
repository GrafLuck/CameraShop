import { describe, it } from 'vitest';
import { NameSpace } from '../../const';
import { datatype } from 'faker';
import { getIsCallModalActive } from './modal-data.selectors';

describe('ModalData selectors', () => {
  const state = {
    [NameSpace.Modal]: {
      isCallModalActive: datatype.boolean(),
    },
  };

  it('should return isCallModalActive from state', () => {
    const {isCallModalActive} = state[NameSpace.Modal];
    const result = getIsCallModalActive(state);
    expect(result).toEqual(isCallModalActive);
  });
});
