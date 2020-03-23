import { applyMiddleware, createStore, compose, Middleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSaga from 'redux-saga';

import * as Reducer from './reducer';
import { RootSaga } from './saga';

interface IWindow extends Window {
  // 크롬 확장 프로그램에 작성되어 있는 JS함수
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(a: R) => R;
}

const loggerMiddleware = createLogger();
const sagaMiddleware = createSaga();

const isDev = process.env.NODE_ENV !== 'production';

let middleware: Middleware[] = [sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, loggerMiddleware];
}

export function configureStore() {
  const devTools = isDev && (window as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = devTools || compose;

  const store = createStore(
    combineReducers(Reducer),
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );
  sagaMiddleware.run(RootSaga);
  return store;
}