import { call, put } from 'redux-saga/effects';

import { IFetchResultHandlers } from '../types/sagas';

export function* fetchDataWorker(
  request: any,
  url: string,
  options: any,
  { success, failure }: IFetchResultHandlers,
) {
  try {
    const res = yield call(request, url, options);

    yield put(success(res));
  } catch (e) {
    yield put(failure());
  }
}
