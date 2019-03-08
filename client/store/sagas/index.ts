import { all, call, fork, select, take } from 'redux-saga/effects';

import { network } from '../../services/network';
import { getLanguageScheme, getLanguageSchemesNames } from '../actions';
import {
  GET_LANGUAGE_SCHEME,
  GET_LANGUAGE_SCHEMES_NAMES,
} from '../constants/actions';
import { fetchDataWorker } from '../helpers/sagas';
import { languageSchemeSelector } from '../selectors';

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
    const { payload } = yield take(GET_LANGUAGE_SCHEME.REQUEST);
    const languageScheme = yield select(languageSchemeSelector);

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
          getLanguageScheme,
        );
      }
    }
  }
}

export function* rootSaga() {
  yield all([
    fork(getLanguageSchemesNamesWatcher),
    fork(getLanguageSchemeWatcher),
  ]);
}
