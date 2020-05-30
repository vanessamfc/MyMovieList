import produce from 'immer';
import { Movie } from '../../../Interfaces';

const INITIAL_STATE = {
  watchedMovie: [],
};

interface MovieState {
  watchedMovie: Movie[];
}

interface Action {
  type: string;
  payload: {
    data: Movie;
  };
}

export default function watchedMovie(
  state: MovieState = INITIAL_STATE,
  action: Action
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@watched/ADD_WATCHED_MOVIE': {
        const find = draft.watchedMovie.find(
          (item) => item.imdbID === action.payload.data.imdbID
        );
        if (!find) {
          draft.watchedMovie.push(action.payload.data);
        }
        break;
      }
      case '@watched/REMOVE_WATCHED_MOVIE': {
        const newArray = draft.watchedMovie.filter(
          (item) => item.imdbID !== action.payload.data.imdbID
        );
        draft.watchedMovie = newArray;
        break;
      }

      default:
    }
  });
}
