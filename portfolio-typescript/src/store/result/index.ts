import { Record, List, fromJS } from 'immutable';
import { handleActions, Action } from 'redux-actions';
import { all, takeLatest, put, delay } from 'redux-saga/effects';

import { DetailState } from './detail';
import { FilterState } from './filter.state';
import { FilterOptionState } from './filter.option.state';

import { Data } from './mock';

export enum FilterTypes {
  rank = 'rank',
}

const prefix = 'mapsin/result';
export const ActionTypes = {

  // FILTER
  CHANGE_FILTER_TYPE: `${prefix}/CHANGE_FILTER_TYPE`,
  CHANCE_RANK_FILTER: `${prefix}/CHANCE_RANK_FILTER`,

  // 리스트
  TRY_FETCH_LIST: `${prefix}/TRY_FETCH_LIST`,
  REQUEST_FETCH_LIST: `${prefix}/REQUEST_FETCH_LIST`,
  SUCCESS_FETCH_LIST: `${prefix}/SUCCESS_FETCH_LIST`,
  FAILURE_FETCH_LIST: `${prefix}/FAILURE_FETCH_LIST`,
}

export const ActionCtor = {

  // filter type 변경
  onChangeFilterType: (filterType: FilterTypes|'') => {
    return {type: ActionTypes.CHANGE_FILTER_TYPE, payload: filterType};
  },
  // rank 변경
  onChangeRankFilter: (filter: string) => {
    return {type: ActionTypes.CHANCE_RANK_FILTER, payload: filter};
  },

  // 리스트
  fetchList: (rank: number) => {
    return {type: ActionTypes.TRY_FETCH_LIST, payload: rank};
  },
};

export function* Saga() {
  yield all ([
    yield takeLatest(ActionTypes.TRY_FETCH_LIST, FetchListAsync),
  ]);
}

// 리스트
function* FetchListAsync(action: Action<number>) {
  try {
    yield put({type: ActionTypes.REQUEST_FETCH_LIST});

    yield delay(100);
    const rank = action.payload;

    if (rank === 0) {
      const response = [...Data];
      yield put({type: ActionTypes.SUCCESS_FETCH_LIST, payload: fromJS(response)})
    } else {
      const response = Data.filter(obj => obj.evaluation === rank);
      yield put({type: ActionTypes.SUCCESS_FETCH_LIST, payload: fromJS(response)});
    }

  } catch (error) {
    yield put({type: ActionTypes.FAILURE_FETCH_LIST, payload: error});
  }
}

interface IState {
  filterType: FilterTypes|'';
  filter: FilterState;
  filterOption: FilterOptionState;

  listType: string;
  list: List<DetailState>;
}
const StateRecord = Record<IState>({
  filterType: '',
  filter: new FilterState(),
  filterOption: new FilterOptionState(),

  listType: '',
  list: List(),
})
export class State extends StateRecord {}

const initSate = new State();

export default handleActions<State, any>({

  // filter type 변경
  [ActionTypes.CHANGE_FILTER_TYPE]: (state, action) => {
    return state
      .set('filterType', action.payload);
  },
  // rank filter
  [ActionTypes.CHANCE_RANK_FILTER]: (state, action) => {
    return state
      .setIn(['filter', 'rank'], action.payload);
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
