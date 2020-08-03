import { all } from 'redux-saga/effects';
import {
  usersSaga,
  filterUsersSaga,
  userSaga,
  deleteSaga,
  editSaga,
  addSaga,
} from './usersSaga';

export default function* rootSaga() {
  yield all([
    usersSaga(),
    filterUsersSaga(),
    userSaga(),
    deleteSaga(),
    editSaga(),
    addSaga(),
  ]);
}
