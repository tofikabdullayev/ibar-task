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
} from '../actions/actionTypes';

export interface UserState {
  user: {
    result: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
    };
  };
  isLoading: boolean;
  error?: any;
  deletedMessage?: string;
}

const initialState: UserState = {
  user: {
    result: {
      id: '',
      first_name: '',
      last_name: '',
      email: '',
    },
  },
  isLoading: false,
};

export default function userReducer(
  state: UserState = initialState,
  action: any
): UserState {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_COMPLETE:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        deletedMessage: '',
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case EDIT_USER:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_USER_COMPLETE:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case EDIT_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_USER_COMPLETE:
      return {
        ...state,
        deletedMessage: 'User removed!',
        isLoading: false,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
