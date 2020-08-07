import { combineReducers } from 'redux';
import movie from './movie/reducer';
import user from './user/reducer';

export default combineReducers({
  movie,
  user,
});
