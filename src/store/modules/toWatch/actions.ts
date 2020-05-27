import { Movie } from '../../../Interfaces';

function addMovieToWatch(data: Movie) {
  return {
    type: '@toWatch/ADD_MOVIE_TO_WATCH',
    payload: { data },
  };
}

export { addMovieToWatch };
