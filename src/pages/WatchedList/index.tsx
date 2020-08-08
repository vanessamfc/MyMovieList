import React, { useEffect, useState } from 'react';
import { Movie } from '../../Interfaces';
import axios from 'axios';
import { useSelector } from 'react-redux';
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

  const [watchedMovies, setWatchedMovies] = useState<Data[]>([]);

  async function getWatchedMovies() {
    try {
      const { data } = await axios.get(`http://${process.env.API_URL ||'localhost:3333'}/movies `, {
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
      await axios.delete(`http://${process.env.API_URL ||'localhost:3333'}/movies/${movie.movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await getWatchedMovies();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleAddToWatch(movie: Data) {
    try {
      const response = await axios.put(
        `http://${process.env.API_URL ||'localhost:3333'}/movies/${movie.movieId}`,
        { status: 'PLAN_TO_WATCH' },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await getWatchedMovies();
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
  );
}

export default WatchedList;
