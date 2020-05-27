import React, { useEffect } from 'react';
import { Movie } from '../../Interfaces';

import { useSelector, useDispatch } from 'react-redux';
import { removeWatchedMovie } from '../../store/modules/watched/actions';

import { addMovieToWatch } from '../../store/modules/toWatch/actions';
// import { Container } from './styles';
interface MyMovieListState {
  watched: {
    watchedMovie: Movie[];
  };
}

// import { Container } from './styles';

function WatchedList() {
  const dispatch = useDispatch();
  const movies = useSelector<MyMovieListState, Movie[]>(
    (state) => state.watched.watchedMovie
  );
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function handleDeleteWatchedMovie(movie: Movie) {
    dispatch(removeWatchedMovie(movie));
  }
  function handleAddToWatch(movie: Movie) {
    dispatch(addMovieToWatch(movie));
  }
  return (
    <div>
      <ul>
        {movies.map((movie) => (
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
