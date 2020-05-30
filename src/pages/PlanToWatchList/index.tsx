import React, { useEffect, useMemo } from 'react';
import { Movie, MyMovieListState } from '../../Interfaces';

import { useDispatch, useSelector } from 'react-redux';
import {
  removeMovieToWatch,
  addMovieWatched,
} from '../../store/modules/movie/actions';

import { Container } from './styles';

function PlanToWatchList() {
  const dispatch = useDispatch();
  const movies = useSelector<MyMovieListState, Movie[]>(
    (state) => state.movie.myMoviesList
  );

  const planToWatcherList = useMemo(
    () => movies.filter((item) => item.watched === false),
    [movies]
  );

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function handleDelete(movie: Movie) {
    dispatch(removeMovieToWatch(movie));
  }
  function handleAddWatchedMovie(movie: Movie) {
    dispatch(addMovieWatched(movie));
  }

  return (
    <div>
      <ul>
        {planToWatcherList.map((movie) => (
          <>
            <li key={movie.imdbID}>{movie.Title}</li>
            <button
              type="button"
              onClick={() => {
                handleDelete(movie);
              }}
            >
              delete
            </button>
            <button
              type="button"
              onClick={() => {
                handleAddWatchedMovie(movie);
              }}
            >
              watched
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default PlanToWatchList;
