import { fork } from 'redux-saga/effects';

import { Saga as SurveySaga } from 'store/survey';

export function* RootSaga() {
  yield fork(SurveySaga);
}
