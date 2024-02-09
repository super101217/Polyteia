import { call, put } from 'redux-saga/effects';
import { request } from 'utils';
import { AppActions, ResponseGenerator } from 'store';

export function* getSavedNumbersSaga() {
  try {
    const response: ResponseGenerator<number[]> = yield call(request, {
      url: `/numeric/saved`,
      method: 'GET',
    });
    const responseData = response.data;
    yield put(AppActions.numeric.getSavedNumbersSuccess(responseData));
  } catch (err) {
    yield put(AppActions.numeric.getSavedNumbersError(err));
  }
}
export function* getRandNumbersSaga() {
  try {
    const response: ResponseGenerator<number[]> = yield call(request, {
      url: `/numeric/rand`,
      method: 'GET',
    });
    const responseData = response.data;
    yield put(AppActions.numeric.getRandNumbersSuccess(responseData));
  } catch (err) {
    yield put(AppActions.numeric.getRandNumbersError(err));
  }
}
