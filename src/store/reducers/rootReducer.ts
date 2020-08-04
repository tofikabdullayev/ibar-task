import { combineReducers } from 'redux';
import usersReducer from './users';
import userReducer from './user';
import postsReducer from './posts';
import postReducer from './post';

export default combineReducers({
  usersState: usersReducer,
  selectedUser: userReducer,
  postsState: postsReducer,
  selectedPost: postReducer,
});
