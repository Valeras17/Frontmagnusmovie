export interface User {
    id: number;
    username: string;
    email: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    year: string;
    url: string;
    poster: string;
    genre: string;
    backdropScreen: string;
  }
  
  export interface Review {
    id: number;
    textReview: string;
    rating: number;
    movie: Movie;
    user: User;
  }

  export interface MovieFormData {
    title: string;
    year: string;
    url: string;
    poster: string;
    genre: string;
    backdropScreen: string;
  }
  export interface NewReviewData {
    textReview: string;
    rating: number;
    movieId: number;
}