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
} from '../actions/actionTypes';

export interface PostState {
  post: {
    result: {
      id: string;
      title: string;
      body: string;
    };
  };
  isLoading: boolean;
  error?: any;
  deletedMessage?: string;
}

const initialState: PostState = {
  post: {
    result: {
      id: '',
      title: '',
      body: '',
    },
  },
  isLoading: false,
};

export default function postReducer(
  state: PostState = initialState,
  action: any
): PostState {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POST_COMPLETE:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
        deletedMessage: '',
      };
    case GET_POST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case ADD_POST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_POST_COMPLETE:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case ADD_POST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case EDIT_POST:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_POST_COMPLETE:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case EDIT_POST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_POST_COMPLETE:
      return {
        ...state,
        deletedMessage: 'Post removed!',
        isLoading: false,
      };
    case DELETE_POST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
