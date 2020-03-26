import { fork } from 'redux-saga/effects';

import { Saga as SignupSaga } from 'store/signup';
import { Saga as SurveySaga } from 'store/survey';
import { Saga as ResultSaga } from 'store/result';

export function* RootSaga() {
  yield fork(SignupSaga);
  yield fork(SurveySaga);
  yield fork(ResultSaga);
}
