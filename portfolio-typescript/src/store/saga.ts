import { fork } from 'redux-saga/effects';

import { Saga as SurveySaga } from 'store/survey';
import { Saga as ResultSaga } from 'store/result';

export function* RootSaga() {
  yield fork(SurveySaga);
  yield fork(ResultSaga);
}
