import { Record, List, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { all, takeLatest, put, delay } from 'redux-saga/effects';

import { DetailState } from './detail';
import { Data } from './mock';

const prefix = 'mapsin/survey';
export const ActionTypes = {
  // 이전버튼
  CHANGE_PREV_BUTTON: `${prefix}/CHANGE_PREV_BUTTON`,
  // 다음버튼
  CHANGE_NEXT_BUTTON: `${prefix}/CHANGE_NEXT_BUTTON`,

  // 현재 값 변경
  CAHGNE_CURRENT_VALUE: `${prefix}/CAHGNE_CURRENT_VALUE`,
  // 전체 점수 계산
  CAHNGE_TOTAL_SCORE: `${prefix}/CAHNGE_TOTAL_SCORE`,
  // 등급 계산
  GET_CALC_RANK: `${prefix}/GET_CALC_RANK`,

  // 데이터
  TRY_FETCH_LIST: `${prefix}/TRY_FETCH_LIST`,
  REQUEST_FETCH_LIST: `${prefix}/REQUEST_FETCH_LIST`,
  SUCCESS_FETCH_LIST: `${prefix}/SUCCESS_FETCH_LIST`,
  FAILURE_FETCH_LIST: `${prefix}/FAILURE_FETCH_LIST`,
}

export const ActionCtor = {
  // 이전버튼
  onChangePrevButton: () => {
    return {type: ActionTypes.CHANGE_PREV_BUTTON};
  },
  // 다음버튼
  onChangeNextButton: () => {
    return {type: ActionTypes.CHANGE_NEXT_BUTTON};
  },

  // 현재 값 변경
  onChangeCurrentValue: (value: number) => {
    return {type: ActionTypes.CAHGNE_CURRENT_VALUE, payload: value}; 
  },
  // 전체 점수 계산
  onChangeTotalScore: (currentIndex: number, currentValue: number) => {
    return {type: ActionTypes.CAHNGE_TOTAL_SCORE, payload: {currentIndex, currentValue}};
  },
  // 등급 계산
  onGetCalcRank: (rank: number) => {
    return {type: ActionTypes.GET_CALC_RANK, payload: rank};
  },

  // 데이터
  fetchList: () => {
    return {type: ActionTypes.TRY_FETCH_LIST};
  },
};

export function* Saga() {
  yield all ([
    yield takeLatest(ActionTypes.TRY_FETCH_LIST, FetchListAsync),
  ]);
}

// 리스트
function* FetchListAsync() {
  try {
    yield put({type: ActionTypes.REQUEST_FETCH_LIST});
    
    yield delay(100);
    const response = [...Data];

    yield put({type:ActionTypes.SUCCESS_FETCH_LIST, payload: fromJS(response)})
  } catch (error) {
    yield put({type: ActionTypes.FAILURE_FETCH_LIST, payload: error});
  }
}

interface IState {
  currentIndex: number;
  currentValue: number;

  saveScore: List<number>;
  totalCount: number;
  rank: number;

  listType: string;
  list: List<DetailState>;
}
const StateRecord = Record<IState>({
  currentIndex: 0,
  currentValue: 0,
  rank: 0,

  saveScore: List([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]),
  totalCount: 0,
  
  listType: '',
  list: List(),
})
export class State extends StateRecord {}

const initSate = new State();

export default handleActions<State, any>({
  // 이전버튼
  [ActionTypes.CHANGE_PREV_BUTTON]: (state) => {
    return state
      .update('currentIndex', currentIndex => currentIndex <= 0 ? 0 : currentIndex - 1);
  },
  // 다음버튼
  [ActionTypes.CHANGE_NEXT_BUTTON]: (state) => {
    return state
      .update('currentIndex', currentIndex => currentIndex >= 9 ? 9 : currentIndex + 1);
  },

  // 현재 값 변경
  [ActionTypes.CAHGNE_CURRENT_VALUE]: (state, action) => {
    return state
      .set('currentValue', action.payload);
  },
  // 전체 점수 계산
  [ActionTypes.CAHNGE_TOTAL_SCORE]: (state, action) => {
    return state
      .setIn(['saveScore', action.payload.currentIndex], action.payload.currentValue);
  },
  // 등급 계산
  [ActionTypes.GET_CALC_RANK]: (state, action) => {
    return state
      .set('rank', action.payload);
  },

  // 리스트
  [ActionTypes.REQUEST_FETCH_LIST]: (state, action) => {
    return state
      .set('listType', action.type);
  },
  [ActionTypes.SUCCESS_FETCH_LIST]: (state, action) => {
    return state
      .set('listType', action.type)
      .set('list', action.payload);
  },
  [ActionTypes.FAILURE_FETCH_LIST]: (state, action) => {
    return state
      .set('listType', action.type);
  },
}, initSate);
