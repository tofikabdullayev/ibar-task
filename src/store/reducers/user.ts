import {
  GET_USER,
  GET_USER_COMPLETE,
  GET_USER_ERROR,
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
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
