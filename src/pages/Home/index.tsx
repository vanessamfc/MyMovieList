import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, StyledInput } from './styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import defaultImg from '../../assets/defaultImg.svg';

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

  const debounceinput = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    debounceinput.current?.setAttribute('spellcheck', 'false');
    debounceinput.current?.focus();
  }, []);

  return (
    <Container>
      <div>
        <h1>Search for a movie!</h1>
        <StyledInput
          type="text"
          value={search}
          inputRef={debounceinput}
          minLength={3}
          debounceTimeout={300}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </div>
      <PerfectScrollbar>
        {movies?.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`}>
            {movie.Poster === 'N/A' ? (
              <img src={defaultImg} alt="movie poster" />
            ) : (
              <img src={movie.Poster} alt="movie poster" />
            )}

            <h1>{movie.Title}</h1>
          </Link>
        ))}
      </PerfectScrollbar>
    </Container>
  );
}

export default Home;
