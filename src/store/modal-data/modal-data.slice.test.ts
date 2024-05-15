import { changeCallModalStatus, modalData } from './modal-data.slice';

describe('ModalData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      isCallModalActive: false,
    };

    const result = modalData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      isCallModalActive: false,
    };

    const result = modalData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change call modul status with "changeCallModalStatus" action', () => {
    const initialState = {
      isCallModalActive: false,
    };

    const status = true;

    const expectedState = {
      isCallModalActive: true,
    };

    const result = modalData.reducer(initialState, changeCallModalStatus(status));

    expect(result).toEqual(expectedState);
  });
});

