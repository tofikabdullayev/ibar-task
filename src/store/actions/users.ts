import {
  GET_USERS,
  GET_USERS_COMPLETE,
  GET_USERS_ERROR,
  FILTER_USERS_BY_NAME,
} from './actionTypes';
import { UsersApi } from '../interfaces';

export function getUsers(page: number = 1) {
  return {
    type: GET_USERS,
    page,
  };
}

export function filterByName(filterText: string) {
  return {
    type: FILTER_USERS_BY_NAME,
    filterText,
  };
}

export function getUsersComplete(payload: UsersApi) {
  return {
    type: GET_USERS_COMPLETE,
    payload,
  };
}

export function getUsersError(error: any) {
  return {
    type: GET_USERS_ERROR,
    error,
  };
}
