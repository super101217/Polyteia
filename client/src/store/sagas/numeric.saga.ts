import { call, put } from 'redux-saga/effects';
import { request } from 'utils';
import { AppActions, Numeric, ResponseGenerator } from 'store';
import { PayloadAction } from '@reduxjs/toolkit';

export function* getSavedNumbersSaga(
  action: PayloadAction<Numeric.GetSavedNumberRequestPayload>
) {
  try {
    const response: ResponseGenerator<number[]> = yield call(request, {
      url: `${action.payload}`,
      method: 'GET',
    });
    const responseData = response.data;
    yield put(AppActions.numeric.getSavedNumbersSuccess(responseData));
  } catch (err) {
    yield put(AppActions.numeric.getSavedNumbersError(err));
  }
}
export function* getRandNumbersSaga(
  action: PayloadAction<Numeric.GetSavedNumberRequestPayload>
) {
  try {
    const response: ResponseGenerator<number[]> = yield call(request, {
      url: `${action.payload}`,
      method: 'GET',
    });
    const responseData = response.data;
    yield put(AppActions.numeric.getRandNumbersSuccess(responseData));
  } catch (err) {
    yield put(AppActions.numeric.getRandNumbersError(err));
  }
}
