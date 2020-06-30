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
  Error: string;
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
export interface UserState {
  user: {
    token: '';
  };
}
export interface User {
  id?: number;
  name: string;
  email: string;
}
