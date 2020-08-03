import {
  GET_USER,
  GET_USER_COMPLETE,
  GET_USER_ERROR,
  DELETE_USER,
  DELETE_USER_COMPLETE,
  DELETE_USER_ERROR,
  EDIT_USER,
  EDIT_USER_COMPLETE,
  EDIT_USER_ERROR,
} from './actionTypes';

export function getUser(userId: string) {
  return {
    type: GET_USER,
    userId,
  };
}

export function getUserComplete(payload: any) {
  return {
    type: GET_USER_COMPLETE,
    payload,
  };
}

export function getUserError(error: any) {
  return {
    type: GET_USER_ERROR,
    error,
  };
}

export function deleteUser(userId: string) {
  return {
    type: DELETE_USER,
    userId,
  };
}

export function deleteUserComplete(payload: any) {
  return {
    type: DELETE_USER_COMPLETE,
    payload,
  };
}

export function deleteUserError(error: any) {
  return {
    type: DELETE_USER_ERROR,
    error,
  };
}
export function editUser(userId: string, name: string, email: string) {
  return {
    type: EDIT_USER,
    userId,
    name,
    email,
  };
}

export function editUserComplete(payload: any) {
  return {
    type: EDIT_USER_COMPLETE,
    payload,
  };
}

export function editUserError(error: any) {
  return {
    type: EDIT_USER_ERROR,
    error,
  };
}
