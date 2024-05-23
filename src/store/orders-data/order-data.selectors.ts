import { SerializedError } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getOrderSavingError = (state: Pick<State, NameSpace.Order>): SerializedError => state[NameSpace.Order].error;
export const getIsOrdersDataSaving = (state: Pick<State, NameSpace.Order>): boolean => state[NameSpace.Order].isOrdersDataSaving;
