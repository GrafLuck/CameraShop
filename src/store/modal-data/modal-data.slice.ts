import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TModalData } from '../../types/state';

const initialState: TModalData = {
  isCallModalActive: false,
};

export const modalData = createSlice({
  name: NameSpace.Modal,
  initialState,
  reducers: {
    changeCallModalStatus: (state, action: PayloadAction<boolean>) => {
      state.isCallModalActive = action.payload;
    },
  },
});

export const { changeCallModalStatus } = modalData.actions;
