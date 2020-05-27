import React, { useEffect } from 'react';
import { Movie } from '../../Interfaces';

import { useDispatch, useSelector } from 'react-redux';

import { removeMovieToWatch } from '../../store/modules/toWatch/actions';
import { addWatchedMovie } from '../../store/modules/watched/actions';
// import { Container } from './styles';
interface MyMovieListState {
  toWatch: {
    toWatchList: Movie[];
  };
}

function PlanToWatchList() {
  const dispatch = useDispatch();
  const movies = useSelector<MyMovieListState, Movie[]>(
    (state) => state.toWatch.toWatchList
  );
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function handleDelete(movie: Movie) {
    dispatch(removeMovieToWatch(movie));
  }
  function handleAddWatchedMovie(movie: Movie) {
    dispatch(addWatchedMovie(movie));
  }

  return (
    <div>
      <ul>
        {movies.map((movie) => (
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
