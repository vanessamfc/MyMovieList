import React, { useEffect, useMemo, useState } from 'react';
import { Movie, MyMovieListState } from '../../Interfaces';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeMovieToWatch,
  addMovieToWatch,
} from '../../store/modules/movie/actions';
import { Link } from 'react-router-dom';
import { StyledButton, Container } from './styles';

interface Data {
  movie: Movie;
  id: number;
  movieId: string;
  status: string;
  updatedAt: string;
  userId: number;
}

function WatchedList() {
  // @ts-ignore
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const movies = useSelector<MyMovieListState, Movie[]>(
    (state) => state.movie.myMoviesList
  );
  const [watchedMovies, setWatchedMovies] = useState<Data[]>([]);

  const watchedMovieList = useMemo(
    () => movies.filter((item) => item.watched === true),
    [movies]
  );

  async function getWatchedMovies() {
    try {
      const { data } = await axios.get('http://localhost:3333/movies', {
        params: { status: 'WATCHED' },
        headers: { Authorization: `Bearer ${token}` },
      });
      setWatchedMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWatchedMovies();
  }, []);

  async function handleDeleteWatchedMovie(movie: Data) {
    try {
      await axios.delete(`http://localhost:3333/movies/${movie.movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function handleAddToWatch(movie: Data) {
    try {
      const response = await axios.put(
        `http://localhost:3333/movies/${movie.movieId}`,
        {
          params: { status: 'PLAN_TO_WATCH' },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <ul>
        {watchedMovies.map((movie) => (
          <div>
            <Link to={`/movie/${movie.movieId}`}>
              <img src={movie.movie?.Poster} alt="" />
              <li>{movie.movie?.Title}</li>
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
