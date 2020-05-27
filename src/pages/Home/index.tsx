import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { DebounceInput } from 'react-debounce-input';
import PerfectScrollbar from 'react-perfect-scrollbar';

interface OmdbResponse {
  Search: Movies[];
  totalResults: string;
  Response: string;
}

interface Movies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function Home() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [search, setSearch] = useState<string>('');

  const getMoviesCallback = useCallback(async () => {
    const {
      data: { Search },
    } = await axios.get<OmdbResponse>(
      `http://www.omdbapi.com/?s=${search}&apikey=8efc0c42`
    );
    setMovies(Search);
  }, [search]);

  useEffect(() => {
    getMoviesCallback();
  }, [getMoviesCallback]);

  return (
    <Container>
      <div>
        <DebounceInput
          type="text"
          value={search}
          minLength={3}
          debounceTimeout={300}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <PerfectScrollbar>
        {movies?.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt="movie poster" />
            <h1>{movie.Title}</h1>
          </Link>
        ))}
      </PerfectScrollbar>
    </Container>
  );
}

export default Home;
