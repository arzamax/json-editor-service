import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  collapsed: true,
});
let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, logger] as any;
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);
