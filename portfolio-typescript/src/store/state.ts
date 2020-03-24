import { combineReducers} from 'redux';

import { State as SurveyState } from 'store/survey';
import { State as ResultState } from 'store/result';

export interface IStoreState {
  SurveyReducer: SurveyState,
  ResultReducer: ResultState,
}