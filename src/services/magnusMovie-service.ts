import { request } from "../utils/axios-interceptors";
import { Review, Movie, MovieFormData,NewReviewData } from '../interfaces/types'


export const movieRequest = () => request({ url: "/movies" });

export const reviewRequest = (movieId: number) => 
request({ url: `/movies/${movieId}/reviews` }).then(response => response.data);

export const addMovie = (movieData: MovieFormData) => 
  request({
    url: "/movies",
    method: "POST",
    data: movieData
  });

export const updateMovie = (movieId: number, movieData: Movie) => 
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

  export const deleteMovie = (movieId: number) => request({ url: `/movies/${movieId}`, method: "DELETE" });

  export const movieRequestWithPagination = (
    pageNo: number, 
    pageSize: number, 
    sortBy: string, 
    sortDir: string
) => {
    return request({
        url: `/movies/page?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`,
        method: "GET"
    }).then(response => response.data);
};

export const sendReview = (reviewData: NewReviewData) => 
  request({
    url: `/movies/${reviewData.movieId}/reviews`,
    method: "POST",
    data: reviewData
  });

  export const getReviewDetails = async (movieId: number, reviewId: number): Promise<Review> => {
    try {
        const response = await request({
            url: `/movies/${movieId}/reviews`,
            method: "GET"
        });
        const reviews: Review[] = response.data;
        const review = reviews.find(r => r.id === reviewId);
        if (!review) {
            throw new Error('Review not found');
        }
        return review;
    } catch (error) {

        throw error;
    }
};

  export const updateReview = async (reviewId: number, reviewData: Review) => {
    try {
      const response = await request({
        url: `/movies/reviews/${reviewId}`,
        method: "PUT",
        data: reviewData
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при обновлении обзора:', error);
      throw error;
    }
  };

  export const fetchAllMovies = async (): Promise<Movie[]> => {
      const response = await request({ url: '/movies', method: 'GET' });
      return response.data;
    
  };


  


 

