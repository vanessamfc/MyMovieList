import React, { useEffect, useState } from 'react';
import { Movie } from '../../Interfaces';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledButton, Container } from './styles';
import Loading from '../../components/Loading';
import mmlApi from '../../service/api';

interface Data {
  movie: Movie;
  id: number;
  movieId: string;
  status: string;
  updatedAt: string;
  userId: number;
}

function WatchedList() {
  const [loading, setLoading] = useState(false);
  const [watchedMovies, setWatchedMovies] = useState<Data[]>([]);

  async function getWatchedMovies() {
    setLoading(true);
    try {
      const { data } = await mmlApi.get(`/movies`, {
        params: { status: 'WATCHED' },
      });
      setWatchedMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getWatchedMovies();
  }, []);

  async function handleDeleteWatchedMovie(movie: Data) {
    try {
      await mmlApi.delete(`/movies/${movie.movieId}`);
      await getWatchedMovies();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleAddToWatch(movie: Data) {
    try {
      await mmlApi.put(`/movies/${movie.movieId}`, { status: 'PLAN_TO_WATCH' });
      await getWatchedMovies();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Container>
        <ul>
          {watchedMovies.map((movie) => (
            <div>
              <Link to={`/movie/${movie.movieId}`}>
                <img src={movie.movie?.Poster} alt="" />
                <p>{movie.movie?.Title}</p>
              </Link>
              <div>
                <StyledButton
                  color="secondary"
                  variant="outlined"
                  type="button"
                  onClick={() => handleAddToWatch(movie)}
                >
                  plan to watch
                </StyledButton>
                <StyledButton
                  color="secondary"
                  variant="outlined"
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
      <Loading open={loading} />
    </>
  );
}

export default WatchedList;
