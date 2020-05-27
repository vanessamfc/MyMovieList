import { combineReducers } from 'redux';
import toWatch from './toWatch/reducer';
import watched from './watched/reducer';

export default combineReducers({
  toWatch,
  watched,
});
