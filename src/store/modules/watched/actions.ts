import { Movie } from '../../../Interfaces';

function addWatchedMovie(data: Movie) {
  return {
    type: '@watched/ADD_WATCHED_MOVIE',
    payload: { data },
  };
}
function removeWatchedMovie(data: Movie) {
  return {
    type: '@watched/REMOVE_WATCHED_MOVIE',
    payload: { data },
  };
}
export { addWatchedMovie, removeWatchedMovie };
