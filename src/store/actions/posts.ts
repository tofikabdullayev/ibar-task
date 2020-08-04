import {
  GET_POSTS,
  GET_POSTS_COMPLETE,
  GET_POSTS_ERROR,
  FILTER_POSTS_BY_NAME,
} from './actionTypes';
import { PostsApi } from '../interfaces';

export function getPosts(userId: string, page: number = 1) {
  return {
    type: GET_POSTS,
    userId,
    page,
  };
}

export function getPostsComplete(payload: PostsApi) {
  return {
    type: GET_POSTS_COMPLETE,
    payload,
  };
}

export function getPostsError(error: any) {
  return {
    type: GET_POSTS_ERROR,
    error,
  };
}

export function filterByName(userId: string, filterText: string) {
  return {
    type: FILTER_POSTS_BY_NAME,
    userId,
    filterText,
  };
}
