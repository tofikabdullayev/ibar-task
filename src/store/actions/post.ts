import {
  GET_POST,
  GET_POST_COMPLETE,
  GET_POST_ERROR,
  DELETE_POST,
  DELETE_POST_COMPLETE,
  DELETE_POST_ERROR,
  EDIT_POST,
  EDIT_POST_COMPLETE,
  EDIT_POST_ERROR,
  ADD_POST,
  ADD_POST_COMPLETE,
  ADD_POST_ERROR,
} from './actionTypes';

export function getPost(postId: string) {
  return {
    type: GET_POST,
    postId,
  };
}

export function getPostComplete(payload: any) {
  return {
    type: GET_POST_COMPLETE,
    payload,
  };
}

export function getPostError(error: any) {
  return {
    type: GET_POST_ERROR,
    error,
  };
}

export function deletePost(postId: string) {
  return {
    type: DELETE_POST,
    postId,
  };
}

export function deletePostComplete(payload: any) {
  return {
    type: DELETE_POST_COMPLETE,
    payload,
  };
}

export function deletePostError(error: any) {
  return {
    type: DELETE_POST_ERROR,
    error,
  };
}
export function editPost(postId: string, title: string, body: string) {
  return {
    type: EDIT_POST,
    postId,
    title,
    body,
  };
}

export function editPostComplete(payload: any) {
  return {
    type: EDIT_POST_COMPLETE,
    payload,
  };
}

export function editPostError(error: any) {
  return {
    type: EDIT_POST_ERROR,
    error,
  };
}

export function addPost(userId: string, title: string, body: string) {
  return {
    type: ADD_POST,
    userId,
    title,
    body,
  };
}

export function addPostComplete(payload: any) {
  return {
    type: ADD_POST_COMPLETE,
    payload,
  };
}

export function addPostError(error: any) {
  return {
    type: ADD_POST_ERROR,
    error,
  };
}
