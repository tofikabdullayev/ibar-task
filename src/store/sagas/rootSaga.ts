import { all } from 'redux-saga/effects';
import {
  usersSaga,
  filterUsersSaga,
  userSaga,
  deleteSaga,
  editSaga,
  addSaga,
} from './usersSaga';
import {
  postsSaga,
  filterPostsSaga,
  getPostSaga,
  addPostSaga,
  editPostSaga,
  deletePostSaga,
} from './postsSaga';

export default function* rootSaga() {
  yield all([
    usersSaga(),
    filterUsersSaga(),
    userSaga(),
    deleteSaga(),
    editSaga(),
    addSaga(),
    postsSaga(),
    filterPostsSaga(),
    getPostSaga(),
    addPostSaga(),
    editPostSaga(),
    deletePostSaga(),
  ]);
}
