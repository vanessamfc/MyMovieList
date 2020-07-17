import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Movie } from '../../Interfaces';
import { Container, StyledButton } from './styles';

interface DataMovie {
  movieId: string;
  status: string;
  userID: string;
}

function MovieInfo() {
  // @ts-ignore
  const token = useSelector((state) => state.user.token);
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const [movieInData, setMovieInData] = useState<DataMovie>();

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
    if (movie) getMovie();
  }, [movie]);

  async function handleAddWatchedMovie() {
    try {
      if (!movieInData) {
        await axios.post(
          'http://localhost:3333/movies',
          {
            movieId: movie?.imdbID,
            status: 'WATCHED',
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.put(
          `http://localhost:3333/movies/${movieInData.movieId}`,
          {
            status: 'WATCHED',
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      await getMovie();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddPlanToWatchMovie() {
    try {
      if (!movieInData) {
        await axios.post(
          'http://localhost:3333/movies',
          {
            movieId: movie?.imdbID,
            status: 'PLAN_TO_WATCH',
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.put(
          `http://localhost:3333/movies/${movieInData.movieId}`,
          {
            status: 'PLAN_TO_WATCH',
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      await getMovie();
    } catch (error) {
      console.log(error);
    }
  }

  async function getMovie() {
    try {
      const { data } = await axios.get(
        `http://localhost:3333/movies/${movie?.imdbID}`,

        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMovieInData(data);
    } catch (error) {
      console.log(error);
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
  );
}

export default MovieInfo;
