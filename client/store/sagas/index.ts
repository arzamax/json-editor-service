import { isNil } from 'ramda';
import { all, call, fork, put, select, take } from 'redux-saga/effects';

import { ISchemeName } from '../../pages/home/components/scheme-select/types';
import { network } from '../../services/network';
import { deleteScheme, getScheme, getSchemesNames, saveScheme, setActiveSchemeName } from '../actions';
import {
  DELETE_SCHEME,
  GET_SCHEME,
  GET_SCHEMES_NAMES,
  SAVE_SCHEME,
} from '../constants/actions';
import { fetchDataWorker } from '../helpers/sagas';
import {
  isSchemeSavingErrorSelector,
  isSchemeTouchedSelector,
  schemeSelector,
  schemesNamesSelector,
} from '../selectors';

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
    const [scheme, isSchemeTouched] = yield all([
      select(schemeSelector),
      select(isSchemeTouchedSelector),
    ]) ;

    if (isSchemeTouched && !isNil(scheme.name)) {
      const { structure } = scheme;

      yield call(
        fetchDataWorker,
        network.post,
        '/structures',
        {
          ...scheme,
          structure: structure.get('root'),
        },
        saveScheme,
      );
      const isSchemeSavingError = yield select(isSchemeSavingErrorSelector);

      if (!isSchemeSavingError) {
        const { id } = yield select(schemeSelector);
        yield put(getSchemesNames.request());
        yield take(GET_SCHEMES_NAMES.SUCCESS);
        const schemesNames = yield select(schemesNamesSelector);
        const activeSchemeName = schemesNames.find((schemeName: ISchemeName) => schemeName.value === id);
        yield put(setActiveSchemeName(activeSchemeName));
      }
    }
  }
}

function* deleteSchemeWatcher() {
  while (true) {
    const { payload: id } = yield take(DELETE_SCHEME.REQUEST);

    yield call(
      fetchDataWorker,
      network.delete,
      '/structures',
      {
        params: {
          id,
        },
      },
      deleteScheme,
    );
  }
}

export function* rootSaga() {
  yield all([
    fork(getSchemesNamesWatcher),
    fork(getSchemeWatcher),
    fork(saveSchemeWatcher),
    fork(deleteSchemeWatcher),
  ]);
}
