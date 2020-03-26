
import { State as SigninState } from 'store/signin';
import { State as SignupState } from 'store/signup';
import { State as SurveyState } from 'store/survey';
import { State as ResultState } from 'store/result';

export interface IStoreState {
  SigninReducer: SigninState,
  SignupReducer: SignupState,
  SurveyReducer: SurveyState,
  ResultReducer: ResultState,
}