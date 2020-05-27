import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToWatch } from '../../store/modules/toWatch/actions';
import { Movie } from '../../Interfaces';

// import { Container } from './styles';

interface MyMovieListState {
  toWatch: {
    toWatchList: Movie[];
  };
}

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  const dispatch = useDispatch();
  const movies = useSelector<MyMovieListState>(
    (state) => state.toWatch.toWatchList
  );

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
    console.log(movies);
  }, [movies]);

  function handleSubmit() {
    if (movie) {
      dispatch(addMovieToWatch(movie));
    }
  }

  return (
    <>
      <div>
        <h1>{movie?.Title}</h1>
        <img src={movie?.Poster} alt="" />
        <p>{movie?.Plot}</p>
        <p>
          {movie?.Ratings[0].Source}: {movie?.Ratings[0].Value}
        </p>
        <p>
          {movie?.Ratings[1].Source}: {movie?.Ratings[1].Value}
        </p>
        <span>{movie?.Genre}, </span>
        <span>{movie?.Awards}</span>
      </div>
      <div>
        <button type="button">watched</button>
        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          plan to watch
        </button>
      </div>
    </>
  );
}

export default MovieInfo;
