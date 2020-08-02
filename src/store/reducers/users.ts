import {
  GET_USERS,
  GET_USERS_COMPLETE,
  GET_USERS_ERROR,
} from '../actions/actionTypes';

export interface UsersState {
  // TODO: add interface for user
  users: [];
  isLoading: boolean;
  error?: any;
}

const initialState: UsersState = {
  users: [],
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
        users: action.users,
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
