import { all, call, fork, select, take } from 'redux-saga/effects';

import { network } from '../../services/network';
import { getScheme, getSchemesNames } from '../actions';
import {
  GET_SCHEME,
  GET_SCHEMES_NAMES,
} from '../constants/actions';
import { fetchDataWorker } from '../helpers/sagas';
import { schemeSelector } from '../selectors';

function* getSchemesNamesWatcher() {
  while (true) {
    yield take(GET_SCHEMES_NAMES.REQUEST);
    yield call(
      fetchDataWorker,
      network,
      '/structures/names',
      {},
      getSchemesNames,
    );
  }
}

function* getSchemeWatcher()  {
  while (true) {
    const { payload } = yield take(GET_SCHEME.REQUEST);
    const languageScheme = yield select(schemeSelector);

    if (payload && payload.hasOwnProperty('value')) {
      if (!languageScheme || (languageScheme.id !== payload.value)) {
        yield call(
          fetchDataWorker,
          network,
          '/structures',
          {
            params: {
              id: payload.value,
            },
          },
          getScheme,
        );
      }
    }
  }
}

export function* rootSaga() {
  yield all([
    fork(getSchemesNamesWatcher),
    fork(getSchemeWatcher),
  ]);
}
