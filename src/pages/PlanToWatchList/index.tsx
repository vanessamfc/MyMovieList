import React, { useEffect, useState } from 'react';
import { Movie } from '../../Interfaces';

import { Container, StyledButton } from './styles';
import { Link } from 'react-router-dom';

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

function PlanToWatchList() {
  const [loading, setLoading] = useState(false);
  const [planToWatchMovies, setPlanToWatchMovies] = useState<Data[]>([]);

  async function getPlanToWatchMovies() {
    setLoading(true);
    try {
      const { data } = await mmlApi.get(`/movies`, {
        params: { status: 'PLAN_TO_WATCH' },
      });
      setPlanToWatchMovies(data);
    } catch (error) {
      toast.error('Sorry, an error occurred loading this page');
    }
    setLoading(false);
  }

  useEffect(() => {
    getPlanToWatchMovies();
  }, []);

  async function handleDeletePlanToWatchMovie(movie: Data) {
    try {
      await mmlApi.delete(`/movies/${movie.movieId}`);
      await getPlanToWatchMovies();
    } catch (error) {
      toast.error('Sorry, an error occurred during deletion');
    }
  }

  async function handleAddWatchedMovie(movie: Data) {
    try {
      await mmlApi.put(`/movies/${movie.movieId}`, {
        status: 'WATCHED',
      });
      await getPlanToWatchMovies();
    } catch (error) {
      toast.error('Sorry, an error occurred while adding your movie');
    }
  }

  return (
    <>
      <Container>
        <ul>
          {planToWatchMovies.map((movie) => (
            <div key={movie.movieId}>
              <Link to={`/movie/${movie.movieId}`}>
                <img src={movie.movie?.Poster} alt="" />
                <li>{movie.movie?.Title}</li>
              </Link>
              <div>
                <StyledButton
                  color="secondary"
                  type="button"
                  variant="outlined"
                  onClick={() => {
                    handleAddWatchedMovie(movie);
                  }}
                >
                  watched
                </StyledButton>
                <StyledButton
                  color="secondary"
                  type="button"
                  variant="outlined"
                  onClick={() => {
                    handleDeletePlanToWatchMovie(movie);
                  }}
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

export default PlanToWatchList;
