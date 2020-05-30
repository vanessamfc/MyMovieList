import React, { useEffect, useMemo } from 'react';
import { Movie, MyMovieListState } from '../../Interfaces';

import { useSelector, useDispatch } from 'react-redux';
import {
  removeMovieToWatch,
  addMovieToWatch,
} from '../../store/modules/movie/actions';
import { Link } from 'react-router-dom';
import { StyledButton, Container } from './styles';

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
    <Container>
      <ul>
        {watchedMovieList.map((movie) => (
          <div>
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie?.Poster} alt="" />
              <li>{movie.Title}</li>
            </Link>
            <div>
              <StyledButton
                color="secondary"
                type="button"
                onClick={() => handleAddToWatch(movie)}
              >
                plan to watch
              </StyledButton>
              <StyledButton
                color="secondary"
                type="button"
                onClick={() => handleDeleteWatchedMovie(movie)}
              >
                delete
              </StyledButton>
            </div>
          </div>
        ))}
      </ul>
    </Container>
  );
}

export default WatchedList;
