import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getIsCallModalActive = (state: Pick<State, NameSpace.Modal>): boolean => state[NameSpace.Modal].isCallModalActive;
