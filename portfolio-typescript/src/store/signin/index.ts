import { Record } from 'immutable';
import { handleActions } from 'redux-actions';

const prefix = 'mapsin/signin';
export const ActionTypes = {
  CHANGE_ID: `${prefix}/CHANGE_ID`,
  CHANGE_PASSWORD: `${prefix}/CHANGE_PASSWORD`,
}

export const ActionCtor = {
  onChangeId: (id: string) => {
    return {type: ActionTypes.CHANGE_ID, payload: id};
  },
  onChangePassword: (password: string) => {
    return {type: ActionTypes.CHANGE_PASSWORD, payload: password};
  },
};

interface IState {
  id: string;
  password: string;
}
const StateRecord = Record<IState>({
  id: '',
  password: '',
})
export class State extends StateRecord {}

const initSate = new State();

export default handleActions<State, any>({
  // 아이디
  [ActionTypes.CHANGE_ID]: (state, action) => {
    return state
      .set('id', action.payload);
  },
  // 비밀번호
  [ActionTypes.CHANGE_PASSWORD]: (state, action) => {
    return state
      .set('password', action.payload);
  },
}, initSate);
