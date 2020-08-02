import { put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_COMPLETE, GET_USERS } from '../actions/actionTypes';

function* testSaga(action: any) {
  yield put({ type: GET_USERS_COMPLETE, users: [1, 2, 3] });
}

export default function* mySaga() {
  yield takeEvery(GET_USERS, testSaga);
}
