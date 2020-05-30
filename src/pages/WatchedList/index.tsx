import React, { useEffect, useMemo } from 'react';
import { Movie, MyMovieListState } from '../../Interfaces';

import { useSelector, useDispatch } from 'react-redux';
import {
  removeMovieToWatch,
  addMovieToWatch,
} from '../../store/modules/movie/actions';

function WatchedList() {
  const dispatch = useDispatch();
  const movies = useSelector<MyMovieListState, Movie[]>(
    (state) => state.movie.myMoviesList
  );

  const watchedMovieList = useMemo(
    () => movies.filter((item) => item.watched === true),
    [movies]
  );

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function handleDeleteWatchedMovie(movie: Movie) {
    dispatch(removeMovieToWatch(movie));
  }
  function handleAddToWatch(movie: Movie) {
    dispatch(addMovieToWatch(movie));
  }
  return (
    <div>
      <ul>
        {watchedMovieList.map((movie) => (
          <>
            <li>{movie.Title}</li>
            <button type="button" onClick={() => handleAddToWatch(movie)}>
              plan to watch
            </button>
            <button
              type="button"
              onClick={() => handleDeleteWatchedMovie(movie)}
            >
              delete
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default WatchedList;
