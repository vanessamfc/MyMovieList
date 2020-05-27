import produce from 'immer';
import { Movie } from '../../../Interfaces';

const INITIAL_STATE = {
  toWatchList: [],
};

interface WatcherState {
  toWatchList: Movie[];
}

interface Action {
  type: string;
  payload: {
    data?: any;
  };
}

export default function toWatch(
  state: WatcherState = INITIAL_STATE,
  action: Action
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@toWatch/ADD_MOVIE_TO_WATCH': {
        draft.toWatchList.push(action.payload.data);
        break;
      }
      default:
    }
  });
}
