import React, { useEffect, useState } from 'react';
import { Movie } from '../../Interfaces';

import { useSelector } from 'react-redux';

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

  const [planToWatchMovies, setPlanToWatchMovies] = useState<Data[]>([]);

  async function getPlanToWatchMovies() {
    try {
      const { data } = await axios.get(`http://${process.env.REACT_APP_API_URL ||'localhost:3333'}/movies`, {
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
    getPlanToWatchMovies();
  }, []);
 
  async function handleDeletePlanToWatchMovie(movie: Data) {
    try {
      await axios.delete(`http://${process.env.REACT_APP_API_URL ||'localhost:3333'}/movies/${movie.movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await getPlanToWatchMovies();
    } catch (error) {
      console.log(error); 
    }
  }
 
  async function handleAddWatchedMovie(movie: Data) {
    try {
      const response = await axios.put(
        `http://${process.env.REACT_APP_API_URL ||'localhost:3333'}/movies/${movie.movieId}`,
        { status: 'WATCHED' },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await getPlanToWatchMovies();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

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
  );
}

export default PlanToWatchList;
