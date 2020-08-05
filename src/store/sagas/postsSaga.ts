import { put, takeEvery, call, select } from 'redux-saga/effects';
import {
  GET_POSTS,
  FILTER_POSTS_BY_NAME,
  GET_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_POST,
} from '../actions/actionTypes';
import { getPosts, getPost, deletePost, editPost, addPost } from '../../API';
import {
  getPosts as getPostsAction,
  getPostsComplete,
  getPostsError,
} from '../actions/posts';
import { PostsState } from '../reducers/posts';
import {
  getPostError,
  getPostComplete,
  deletePostComplete,
  deletePostError,
  editPostComplete,
  editPostError,
  addPostComplete,
  addPostError,
} from '../actions/post';

export interface GetPostActionInterface {
  type: string;
  userId: string;
  page: number;
}

const getFilterText = (state: { postsState: PostsState }) =>
  state.postsState.filterText;

function* onGetPosts({ userId, page }: GetPostActionInterface) {
  try {
    const filterText = yield select(getFilterText);
    let response = yield call(getPosts, { userId, page, title: filterText });
    const posts = response.data;
    yield put(getPostsComplete(posts));
  } catch (error) {
    yield put(getPostsError(error));
  }
}

function* onFilterPosts(action: {
  type: string;
  userId: string;
  filterText: string;
}) {
  yield put(getPostsAction(action.userId, 1));
}

function* onGetPost(action: { type: string; postId: number }) {
  try {
    let response = yield call(getPost, action.postId);
    const post = response.data;
    yield put(getPostComplete(post));
  } catch (error) {
    yield put(getPostError(error));
  }
}

function* onDeletePost(action: { type: string; postId: number }) {
  try {
    let response = yield call(deletePost, action.postId);
    const post = response.data;
    yield put(deletePostComplete(post));
  } catch (error) {
    yield put(deletePostError(error));
  }
}

function* onEditPost(action: {
  type: string;
  postId: number;
  title: string;
  body: string;
}) {
  try {
    let response = yield call(
      editPost,
      action.postId,
      action.title,
      action.body
    );
    const post = response.data;
    yield put(editPostComplete(post));
  } catch (error) {
    yield put(editPostError(error));
  }
}

function* onAddPost(action: {
  type: string;
  title: string;
  body: string;
  userId: string;
}) {
  try {
    let response = yield call(
      addPost,
      action.userId,
      action.title,
      action.body
    );
    const post = response.data;
    yield put(addPostComplete(post));
    yield (window.location.href = `/users/${action.userId}/posts/`);
  } catch (error) {
    yield put(addPostError(error));
  }
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, onGetPosts);
}

export function* filterPostsSaga() {
  yield takeEvery(FILTER_POSTS_BY_NAME, onFilterPosts);
}

export function* getPostSaga() {
  yield takeEvery(GET_POST, onGetPost);
}

export function* addPostSaga() {
  yield takeEvery(ADD_POST, onAddPost);
}

export function* editPostSaga() {
  yield takeEvery(EDIT_POST, onEditPost);
}

export function* deletePostSaga() {
  yield takeEvery(DELETE_POST, onDeletePost);
}
