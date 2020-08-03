import { combineReducers } from 'redux';
import usersReducer from './users';
import userReducer from './user';

export default combineReducers({
  usersState: usersReducer,
  selectedUser: userReducer,
});
