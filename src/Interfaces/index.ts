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
}

export interface Ratings {
  Source: string;
  Value: string;
}
