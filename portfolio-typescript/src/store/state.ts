
import { State as SignupState } from 'store/signup';
import { State as SurveyState } from 'store/survey';
import { State as ResultState } from 'store/result';

export interface IStoreState {
  SignupReducer: SignupState,
  SurveyReducer: SurveyState,
  ResultReducer: ResultState,
}