import { put, takeEvery, call } from 'redux-saga/effects';
import { GET_USERS } from '../actions/actionTypes';
import { getUsers } from '../../API';
import { getUsersComplete, getUsersError } from '../actions/users';

function* onGetUsers(action: any) {
  try {
    let response = yield call(getUsers, action.page);
    const users = response.data;
    yield put(getUsersComplete(users));
  } catch (error) {
    yield put(getUsersError(error));
  }
}

export default function* usersSaga() {
  yield takeEvery(GET_USERS, onGetUsers);
}
