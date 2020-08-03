import { all } from 'redux-saga/effects';
import { usersSaga, filterUsersSaga } from './usersSaga';

export default function* rootSaga() {
  yield all([usersSaga(), filterUsersSaga()]);
}
