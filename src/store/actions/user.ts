import { GET_USER, GET_USER_COMPLETE, GET_USER_ERROR } from './actionTypes';

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
