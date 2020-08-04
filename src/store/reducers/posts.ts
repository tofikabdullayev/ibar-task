import {
  GET_POSTS,
  GET_POSTS_COMPLETE,
  GET_POSTS_ERROR,
  FILTER_POSTS_BY_NAME,
} from '../actions/actionTypes';
import { PostsApi } from '../interfaces';

export interface PostsState {
  posts: PostsApi;
  filterText?: string;
  isLoading: boolean;
  error?: any;
}

const initialState: PostsState = {
  posts: {
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

export default function postsReducer(
  state: PostsState = initialState,
  action: any
): PostsState {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_COMPLETE:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case FILTER_POSTS_BY_NAME:
      return {
        ...state,
        filterText: action.filterText,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
