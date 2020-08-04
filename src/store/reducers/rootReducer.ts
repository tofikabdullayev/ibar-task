import { combineReducers } from 'redux';
import usersReducer from './users';
import userReducer from './user';
import postsReducer from './posts';

export default combineReducers({
  usersState: usersReducer,
  selectedUser: userReducer,
  postsState: postsReducer,
});
