import produce from 'immer';
import { Movie } from '../../../Interfaces';

const INITIAL_STATE = {
  toWatchList: [],
};

interface MovieState {
  toWatchList: Movie[];
}

interface Action {
  type: string;
  payload: {
    data: Movie;
  };
}

export default function toWatch(
  state: MovieState = INITIAL_STATE,
  action: Action
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@toWatch/ADD_MOVIE_TO_WATCH': {
        const find = draft.toWatchList.find(
          (item) => item.imdbID === action.payload.data?.imdbID
        );
        if (!find) {
          draft.toWatchList.push(action.payload.data);
        }
        break;
      }
      case '@watched/ADD_WATCHED_MOVIE':
      case '@toWatch/REMOVE_MOVIE_TO_WATCH': {
        const newArray = draft.toWatchList.filter(
          (item) => item.imdbID !== action.payload.data?.imdbID
        );
        draft.toWatchList = newArray;

        break;
      }
      default:
    }
  });
}
