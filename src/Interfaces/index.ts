export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  Poster: string;
  Plot: string;
  Awards: string;
  Genre: string;
  Ratings: Ratings[];
  watched: boolean;
}

export interface Ratings {
  Source: string;
  Value: string;
}

export interface MyMovieListState {
  movie: {
    myMoviesList: Movie[];
  };
}
