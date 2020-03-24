import { Record, List, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { all, takeLatest, put, delay } from 'redux-saga/effects';

export enum GenderType {
  female = 'female',
  male = 'male',
}

const prefix = 'mapsin/signup';
export const ActionTypes = {
  CHANGE_GENDER: `${prefix}/CHANGE_GENDER`
}

export const ActionCtor = {
  onChangeGender: (gender: GenderType) => {
    return {type: ActionTypes.CHANGE_GENDER, payload: gender};
  },
};

export function* Saga() {
  yield all ([
  ]);
}

interface IState {
  gender: GenderType;
}
const StateRecord = Record<IState>({
  gender: GenderType.female,
})
export class State extends StateRecord {}

const initSate = new State();

export default handleActions<State, any>({
  // 성별
  [ActionTypes.CHANGE_GENDER]: (state, action) => {
    return state
      .set('gender', action.payload);
  },
}, initSate);
