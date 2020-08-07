import React, { useEffect, useMemo, useState } from 'react';
import { Movie, MyMovieListState } from '../../Interfaces';

import { useDispatch, useSelector } from 'react-redux';
import {
  removeMovieToWatch,
  addMovieWatched,
} from '../../store/modules/movie/actions';

import { Container, StyledButton } from './styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Data {
  movie: Movie;
  id: number;
  movieId: string;
  status: string;
  updatedAt: string;
  userId: number;
}

function PlanToWatchList() {
  // @ts-ignore
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const movies = useSelector<MyMovieListState, Movie[]>(
    (state) => state.movie.myMoviesList
  );

  const [planToWatchMovies, setPlanToWatchMovies] = useState<Data[]>([]);

  const planToWatcherList = useMemo(
    () => movies.filter((item) => item.watched === false),
    [movies]
  );

  async function getPlanToWatchMovies() {
    try {
      const { data } = await axios.get('http://localhost:3333/movies', {
        params: { status: 'PLAN_TO_WATCH' },
        headers: { Authorization: `Bearer ${token}` },
      });
      setPlanToWatchMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function handleDelete(movie: Data) {}
  function handleAddWatchedMovie(movie: Data) {}

  return (
    <Container>
      <ul>
        {planToWatchMovies.map((movie) => (
          <div key={movie.movie?.imdbID}>
            <Link to={`/movie/${movie.movieId}`}>
              <img src={movie.movie?.Poster} alt="" />
              <li>{movie.movie?.Title}</li>
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
