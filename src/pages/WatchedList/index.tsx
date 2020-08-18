import React, { useEffect, useState } from 'react';
import { Movie } from '../../Interfaces';
import { Link } from 'react-router-dom';
import { StyledButton, Container } from './styles';
import Loading from '../../components/Loading';
import mmlApi from '../../service/api';
import { toast } from 'react-toastify';

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
    } catch (error) {
      toast.error('Sorry, an error occurred loading this page');
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
      toast.error('Sorry, an error occurred during deletion');
    }
  }
  async function handleAddToWatch(movie: Data) {
    try {
      await mmlApi.put(`/movies/${movie.movieId}`, { status: 'PLAN_TO_WATCH' });
      await getWatchedMovies();
    } catch (error) {
      toast.error('Sorry, an error occurred while adding your movie');
    }
  }
  return (
    <>
      <Container>
        <ul>
          {watchedMovies.map((movie) => (
            <div key={movie.movieId}>
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
