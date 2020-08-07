import { combineReducers } from 'redux';
import movie from './movie/reducer';
import users from './users/reducer';

export default combineReducers({
  movie,
  users,
});
