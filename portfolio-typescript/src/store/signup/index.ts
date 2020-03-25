import { Record, List, fromJS } from 'immutable';
import { Action, handleActions } from 'redux-actions';
import { all, takeLatest, put, delay } from 'redux-saga/effects';

import { UserState } from './user.detail';
import { Data } from './user.mock';

export enum GenderType {
  female = 'female',
  male = 'male',
}

const prefix = 'mapsin/signup';
export const ActionTypes = {
  CAHNGE_ID: `${prefix}/CAHNGE_ID`,
  CHANGE_PASSWORD: `${prefix}/CHANGE_PASSWORD`,
  CHANGE_PASSWORD_CHECK: `${prefix}/CHANGE_PASSWORD_CHECK`,
  CHANGE_GENDER: `${prefix}/CHANGE_GENDER`,
  CHANGE_AGE: `${prefix}/CHANGE_AGE`,

  TRY_CREATE_USER: `${prefix}/TRY_CREATE_USER`,
  REQUEST_CREATE_USER: `${prefix}/REQUEST_CREATE_USER`,
  SUCCESS_CREATE_USER: `${prefix}/SUCCESS_CREATE_USER`,
  FAILURE_CREATE_USER: `${prefix}/FAILURE_CREATE_USER`,
}

export const ActionCtor = {
  onChangeId: (id: string) => {
    return {type: ActionTypes.CAHNGE_ID, payload: id};
  },
  onChangePassword: (password: string) => {
    return {type: ActionTypes.CHANGE_PASSWORD, payload: password};
  },
  onChangePasswordCheck: (passwordCheck: string) => {
    return {type: ActionTypes.CHANGE_PASSWORD_CHECK, payload: passwordCheck};
  },
  onChangeGender: (gender: GenderType) => {
    return {type: ActionTypes.CHANGE_GENDER, payload: gender};
  },
  onChangeAge: (age: string) => {
    return {type: ActionTypes.CHANGE_AGE, payload: age};
  },

  createUser: (params: UserState) => {
    return {type: ActionTypes.TRY_CREATE_USER, payload: params};
  },
};

export function* Saga() {
  yield all ([
    yield takeLatest(ActionTypes.TRY_CREATE_USER, CreateUserAsync),
  ]);
}

function* CreateUserAsync(action: Action<UserState>) {
  try {
    yield put({type: ActionTypes.REQUEST_CREATE_USER});
    yield delay(100);

    const params = { ...action.payload}
    Data.push(params)
    localStorage.user = JSON.stringify(Data);

    yield put({type: ActionTypes.SUCCESS_CREATE_USER, payload: fromJS(Data)})
  } catch (error) {
    yield put({type: ActionTypes.FAILURE_CREATE_USER, payload: error});
  }
}

interface IState {
  id: string;
  password: string;
  passwordCheck: string;
  gender: GenderType;
  age: string;

  userType: string;
  userInfo: List<UserState>;
}
const StateRecord = Record<IState>({
  id: '',
  password: '',
  passwordCheck: '',
  gender: GenderType.female,
  age: 'twenty',

  userType: '',
  userInfo: List(),
})
export class State extends StateRecord {}

const initSate = new State();

export default handleActions<State, any>({
  // 아이디
  [ActionTypes.CAHNGE_ID]: (state, action) => {
    return state
      .set('id', action.payload);
  },
  // 비밀번호
  [ActionTypes.CHANGE_PASSWORD]: (state, action) => {
    return state
      .set('password', action.payload);
  },
  // 비밀번호체크
  [ActionTypes.CHANGE_PASSWORD_CHECK]: (state, action) => {
    return state
    .set('passwordCheck', action.payload);
  },
  // 성별
  [ActionTypes.CHANGE_GENDER]: (state, action) => {
    return state
      .set('gender', action.payload);
  },
  // 나이
  [ActionTypes.CHANGE_AGE]: (state, action) => {
    return state
      .set('age', action.payload);
  },

  // create user
  [ActionTypes.REQUEST_CREATE_USER]: (state, action) => {
    return state
      .set('userType', action.type);
  },
  [ActionTypes.SUCCESS_CREATE_USER]: (state, action) => {
    return state
      .set('userType', action.type)
      .set('userType', action.payload);
  },
  [ActionTypes.FAILURE_CREATE_USER]: (state, action) => {
    return state
      .set('userType', action.type);
  },
}, initSate);
