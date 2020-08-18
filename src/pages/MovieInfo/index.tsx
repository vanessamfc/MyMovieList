import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Movie } from '../../Interfaces';
import { Container, StyledButton } from './styles';

import Loading from '../../components/Loading';
import mmlApi, { omdbApi } from '../../service/api';
interface DataMovie {
  movieId: string;
  status: string;
  userID: string;
}

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const [movieInData, setMovieInData] = useState<DataMovie>();

  const [loading, setLoading] = useState(false);
  const getMoviesCallback = useCallback(async () => {
    setLoading(true);
    const { data } = await omdbApi.get<Movie>(`/?i=${id}&apikey=8efc0c42`);
    setMovie(data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMoviesCallback();
  }, [getMoviesCallback]);

  useEffect(() => {
    if (movie) getMovie();
  }, [movie]);

  async function handleAddWatchedMovie() {
    try {
      if (!movieInData) {
        await mmlApi.post(`/movies`, {
          movieId: movie?.imdbID,
          status: 'WATCHED',
        });
      } else {
        await mmlApi.put(`/movies/${movieInData.movieId}`, {
          status: 'WATCHED',
        });
      }
      await getMovie();
      toast.success('Movie added to your Watched List');
    } catch (error) {
      toast.error('Sorry, an error occurred while adding your movie');
    }
  }

  async function handleAddPlanToWatchMovie() {
    try {
      if (!movieInData) {
        await mmlApi.post(`/movies`, {
          movieId: movie?.imdbID,
          status: 'PLAN_TO_WATCH',
        });
      } else {
        await mmlApi.put(`/movies/${movieInData.movieId}`, {
          status: 'PLAN_TO_WATCH',
        });
      }
      await getMovie();
      toast.success('Movie added to your Plant To Watch List');
    } catch (error) {
      toast.error('Sorry, an error occurred while adding your movie');
    }
  }

  async function getMovie() {
    try {
      const { data } = await mmlApi.get(`/movies/${movie?.imdbID}`);
      setMovieInData(data);
    } catch (error) {
      if (error.response.status !== 404) {
        toast.error('Sorry, an error occurred loading this page');
      }
    }
  }

  return (
    <>
      <Container>
        <div>
          <h1>{movie?.Title}</h1>
        </div>
        <div>
          <div>
            <img src={movie?.Poster} alt="" />
          </div>
          {movie ? (
            <div>
              <p>{movie?.Plot}</p>
              <h1>Ratings:</h1>
              <>
                {movie?.Ratings.map((item) => (
                  <p key={item.Source}>
                    {item.Source}: {item.Value}
                  </p>
                ))}
              </>

              <span>{movie?.Genre}, </span>
              <span>{movie?.Awards}</span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <StyledButton
            type="button"
            color="primary"
            variant="contained"
            disabled={movieInData?.status === 'PLAN_TO_WATCH'}
            onClick={() => {
              handleAddPlanToWatchMovie();
            }}
          >
            plan to watch
          </StyledButton>
          <StyledButton
            color="primary"
            variant="contained"
            type="button"
            disabled={movieInData?.status === 'WATCHED'}
            onClick={() => {
              handleAddWatchedMovie();
            }}
          >
            watched
          </StyledButton>
        </div>
      </Container>

      <Loading open={loading} />
    </>
  );
}

export default MovieInfo;
