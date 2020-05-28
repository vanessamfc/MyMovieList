import React, { useEffect, useMemo } from 'react';
import { Movie, MyMovieListState } from '../../Interfaces';

import { useDispatch, useSelector } from 'react-redux';
import {
  removeMovieToWatch,
  addMovieWatched,
} from '../../store/modules/movie/actions';

import { Container, StyledButton } from './styles';
import { Link } from 'react-router-dom';

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
    <Container>
      <ul>
        {planToWatcherList.map((movie) => (
          <div key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie?.Poster} alt="" />
              <li>{movie.Title}</li>
            </Link>
            <div>
              <StyledButton
                color="secondary"
                type="button"
                onClick={() => {
                  handleAddWatchedMovie(movie);
                }}
              >
                watched
              </StyledButton>
              <StyledButton
                color="secondary"
                type="button"
                onClick={() => {
                  handleDelete(movie);
                }}
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

export default PlanToWatchList;
