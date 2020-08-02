import {
  GET_USERS,
  GET_USERS_COMPLETE,
  GET_USERS_ERROR,
} from '../actions/actionTypes';
import { UsersApi } from '../interfaces';

export interface UsersState {
  users: UsersApi;
  isLoading: boolean;
  error?: any;
}

const initialState: UsersState = {
  users: {
    _meta: {
      totalCount: 0,
      pageCount: 0,
      currentPage: 0,
      perPage: 0,
    },
    result: [],
  },
  isLoading: false,
};

export default function usersReducer(
  state: UsersState = initialState,
  action: any
): UsersState {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_COMPLETE:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
