import { put, takeEvery, call, select } from 'redux-saga/effects';
import { GET_USERS, FILTER_USERS_BY_NAME } from '../actions/actionTypes';
import { getUsers } from '../../API';
import {
  getUsers as getUsersAction,
  getUsersComplete,
  getUsersError,
} from '../actions/users';
import { UsersState } from '../reducers/users';

export interface GetUserActionInterface {
  type: string;
  page: number;
}

const getFilterText = (state: { usersState: UsersState }) =>
  state.usersState.filterText;

function* onGetUsers({ page }: GetUserActionInterface) {
  try {
    const filterText = yield select(getFilterText);
    let response = yield call(getUsers, { page, name: filterText });
    const users = response.data;
    yield put(getUsersComplete(users));
  } catch (error) {
    yield put(getUsersError(error));
  }
}
function* onFilterUsers(action: { type: string; filterText: string }) {
  yield put(getUsersAction(1));
}

export function* usersSaga() {
  yield takeEvery(GET_USERS, onGetUsers);
}

export function* filterUsersSaga() {
  yield takeEvery(FILTER_USERS_BY_NAME, onFilterUsers);
}
