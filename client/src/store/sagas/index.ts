import { all, takeLatest } from 'redux-saga/effects';
import { getRandNumbersSaga, getSavedNumbersSaga } from './numeric.saga';
import { numericAction } from 'store/slices';

export function* appSaga() {
  yield all([
    takeLatest(numericAction.getRandNumbers.type, getRandNumbersSaga),
  ]);
  yield all([
    takeLatest(numericAction.getSavedNumbers.type, getSavedNumbersSaga),
  ]);
}
