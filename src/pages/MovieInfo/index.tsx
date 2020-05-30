import React, { useState, useCallback, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMovieToWatch,
  addMovieWatched,
} from '../../store/modules/movie/actions';
import { Movie, MyMovieListState } from '../../Interfaces';
import { Container, StyledButton } from './styles';

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  const dispatch = useDispatch();
  const movies = useSelector<MyMovieListState, Movie[]>(
    (state) => state.movie.myMoviesList
  );

  const getMoviesCallback = useCallback(async () => {
    const { data } = await axios.get<Movie>(
      `http://www.omdbapi.com/?i=${id}&apikey=8efc0c42`
    );
    setMovie(data);
  }, [id]);

  useEffect(() => {
    getMoviesCallback();
  }, [getMoviesCallback]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const existMovie = useMemo(() => {
    const find = movies.find((item) => item.imdbID === id);
    return find;
  }, [movies, id]);

  function handleSubmit() {
    if (movie) {
      dispatch(addMovieToWatch(movie));
    }
  }
  function handleAddWatchedMovie() {
    if (movie) {
      dispatch(addMovieWatched(movie));
    }
  }

  return (
    <Container>
      <div>
        <h1>{movie?.Title}</h1>
      </div>
      <div>
        <div>
          <img src={movie?.Poster} alt="" />
        </div>
        <div>
          <p>{movie?.Plot}</p>
          <h1>Ratings:</h1>
          <>
            {movie?.Ratings.map((item) => (
              <p>
                {item.Source}: {item.Value}
              </p>
            ))}
          </>

          <span>{movie?.Genre}, </span>
          <span>{movie?.Awards}</span>
        </div>
      </div>
      <div>
        <StyledButton
          disabled={existMovie?.watched === false}
          type="button"
          color="primary"
          onClick={() => {
            handleSubmit();
          }}
          variant="contained"
        >
          plan to watch
        </StyledButton>
        <StyledButton
          color="primary"
          variant="contained"
          disabled={existMovie?.watched === true}
          type="button"
          onClick={() => handleAddWatchedMovie()}
        >
          watched
        </StyledButton>
      </div>
    </Container>
  );
}

export default MovieInfo;
