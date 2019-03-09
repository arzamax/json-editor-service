import { all, call, fork, select, take } from 'redux-saga/effects';

import { network } from '../../services/network';
import { getScheme, getSchemesNames, saveScheme } from '../actions';
import {
  GET_SCHEME,
  GET_SCHEMES_NAMES,
  SAVE_SCHEME,
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
    const scheme = yield select(schemeSelector);

    if (payload && payload.hasOwnProperty('value')) {
      if (!scheme || (scheme.id !== payload.value)) {
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

function* saveSchemeWatcher() {
  while (true) {
    yield take(SAVE_SCHEME.REQUEST);
    const scheme = yield select(schemeSelector);
    const { id, name, structure } = scheme;

    yield call(
      fetchDataWorker,
      network.post,
      '/structures',
      {
        id,
        name,
        structure: structure.toJS(),
      },
      saveScheme,
    );
  }
}

export function* rootSaga() {
  yield all([
    fork(getSchemesNamesWatcher),
    fork(getSchemeWatcher),
    fork(saveSchemeWatcher),
  ]);
}
