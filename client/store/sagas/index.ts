import { all, call, fork, take } from 'redux-saga/effects';

import { network } from '../../services/network';
import { getLanguageScheme, getLanguageSchemesNames } from '../actions';
import {
  GET_LANGUAGE_SCHEME,
  GET_LANGUAGE_SCHEMES_NAMES,
} from '../constants/actions';
import { fetchDataWorker } from '../helpers/sagas';

function* getLanguageSchemesNamesWatcher() {
  while (true) {
    yield take(GET_LANGUAGE_SCHEMES_NAMES.REQUEST);
    yield call(
      fetchDataWorker,
      network,
      '/structures/names',
      {},
      getLanguageSchemesNames,
    );
  }
}

function* getLanguageSchemeWatcher()  {
  while (true) {
    const { payload: id } = yield take(GET_LANGUAGE_SCHEME.REQUEST);
    yield call(
      fetchDataWorker,
      network,
      '/structures',
      {
        params: {
          id,
        },
      },
      getLanguageScheme,
    );
  }
}

export function* rootSaga() {
  yield all([
    fork(getLanguageSchemesNamesWatcher),
    fork(getLanguageSchemeWatcher),
  ]);
}
