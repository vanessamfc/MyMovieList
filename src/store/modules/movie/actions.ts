import { Movie } from '../../../Interfaces';

function addMovieToWatch(data: Movie) {
  return {
    type: '@myMovies/ADD_MOVIE_TO_WATCH',
    payload: { data },
  };
}

function addMovieWatched(data: Movie) {
  return {
    type: '@myMovies/ADD_WATCHED_MOVIE',
    payload: { data },
  };
}

function removeMovieToWatch(data: Movie) {
  return {
    type: '@myMovies/REMOVE_MOVIE_TO_WATCH',
    payload: { data },
  };
}
export { addMovieToWatch, addMovieWatched, removeMovieToWatch };
