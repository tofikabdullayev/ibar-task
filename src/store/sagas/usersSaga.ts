import { put, takeEvery, call, select } from 'redux-saga/effects';
import {
  GET_USERS,
  FILTER_USERS_BY_NAME,
  GET_USER,
  DELETE_USER,
  EDIT_USER,
} from '../actions/actionTypes';
import { getUsers, getUser, deleteUser, editUser } from '../../API';
import {
  getUsers as getUsersAction,
  getUsersComplete,
  getUsersError,
} from '../actions/users';
import { UsersState } from '../reducers/users';
import {
  getUserError,
  getUserComplete,
  deleteUserComplete,
  deleteUserError,
  editUserComplete,
  editUserError,
} from '../actions/user';

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

function* onGetUser(action: { type: string; userId: number }) {
  try {
    let response = yield call(getUser, action.userId);
    const user = response.data;
    yield put(getUserComplete(user));
  } catch (error) {
    yield put(getUserError(error));
  }
}

function* onDeleteUser(action: { type: string; userId: number }) {
  try {
    let response = yield call(deleteUser, action.userId);
    const user = response.data;
    yield put(deleteUserComplete(user));
  } catch (error) {
    yield put(deleteUserError(error));
  }
}

function* onEditUser(action: {
  type: string;
  userId: number;
  name: string;
  email: string;
}) {
  try {
    let response = yield call(
      editUser,
      action.userId,
      action.name,
      action.email
    );
    const user = response.data;
    yield put(editUserComplete(user));
  } catch (error) {
    yield put(editUserError(error));
  }
}

export function* usersSaga() {
  yield takeEvery(GET_USERS, onGetUsers);
}

export function* filterUsersSaga() {
  yield takeEvery(FILTER_USERS_BY_NAME, onFilterUsers);
}

export function* userSaga() {
  yield takeEvery(GET_USER, onGetUser);
}

export function* editSaga() {
  yield takeEvery(EDIT_USER, onEditUser);
}

export function* deleteSaga() {
  yield takeEvery(DELETE_USER, onDeleteUser);
}
