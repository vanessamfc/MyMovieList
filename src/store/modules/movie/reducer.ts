import produce from 'immer';
import { Movie } from '../../../Interfaces';

const INITIAL_STATE = {
  myMoviesList: [],
};

interface MovieState {
  myMoviesList: Movie[];
}

interface Action {
  type: string;
  payload: {
    data: Movie;
  };
}

export default function myMovies(
  state: MovieState = INITIAL_STATE,
  action: Action
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@myMovies/ADD_MOVIE_TO_WATCH': {
        const find = draft.myMoviesList.findIndex(
          (item) => item.imdbID === action.payload.data?.imdbID
        );
        if (find >= 0) {
          draft.myMoviesList[find].watched = false;
        } else {
          draft.myMoviesList.push({ ...action.payload.data, watched: false });
        }
        break;
      }
      case '@myMovies/ADD_WATCHED_MOVIE': {
        const find = draft.myMoviesList.findIndex(
          (item) => item.imdbID === action.payload.data.imdbID
        );
        if (find >= 0) {
          draft.myMoviesList[find].watched = true;
        } else {
          draft.myMoviesList.push({ ...action.payload.data, watched: true });
        }
        break;
      }
      case '@myMovies/REMOVE_MOVIE_TO_WATCH': {
        const newArray = draft.myMoviesList.filter(
          (item) => item.imdbID !== action.payload.data?.imdbID
        );
        draft.myMoviesList = newArray;

        break;
      }
      default:
    }
  });
}
