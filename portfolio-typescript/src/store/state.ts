import { combineReducers} from 'redux';

import { State as SurveyState } from 'store/survey';

export interface IStoreState {
  SurveyReducer: SurveyState,
}