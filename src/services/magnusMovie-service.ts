import { request } from "../utils/axios-interceptors";
import { MovieData } from '../interfaces/MovieData';
import { SendReviewData } from "../interfaces/SendReviewData";

export const movieRequest = () => request({ url: "/movies" });

export const reviewRequest = (movieId: number) => 
  request({ url: `/${movieId}/reviews` }).then(response => response.data);

export const sendReview = (reviewData: SendReviewData) =>
  request({
    url: `/${reviewData.movieId}/reviews`,
    method: "POST",
    data: reviewData
  });

export const addMovie = (movieData: MovieData) => 
  request({
    url: "/movies",
    method: "POST",
    data: movieData
  });

export const updateMovie = (movieId: number, movieData: MovieData) => 
  request({
    url: `/movies/${movieId}`,
    method: "PUT",
    data: movieData
  });

export const getMovieDetails = (movieId: number) =>
  request({
    url: `/movies/${movieId}`,
    method: "GET"
  }).then(response => response.data);
