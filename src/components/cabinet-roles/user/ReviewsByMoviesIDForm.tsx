import { useEffect, useState, useContext } from 'react';
import { getMovieDetails, movieRequest, reviewRequest } from '../../../services/magnusMovie-service';
import AuthContext from '../../../contexts/AuthContext';
import Swal from 'sweetalert2';
import Spinner from '../../spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { Review, Movie } from '../../../interfaces/types'





const ReviewsByMoviesIDForm = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/user-home');
  };

  const { username } = useContext(AuthContext);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const moviesResponse = await movieRequest();
        const movies: Movie[] = moviesResponse.data;
        let userReviews: Review[] = [];

        for (const movie of movies) {
          const movieReviewsResponse = await reviewRequest(movie.id);
          for (const review of movieReviewsResponse) {
            if (review.user.username === username) {
              const movieDetailsResponse = await getMovieDetails(movie.id);
              userReviews.push({ ...review, movie: movieDetailsResponse });
            }
          }
        }

        setReviews(userReviews);
      } catch (error) {
        console.error('Error during API request:', error);
        Swal.fire('Error', 'Failed to fetch reviews', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [username]);

  if (isLoading) {
    return <Spinner title="Loading reviews..." />;
  }
  const handleEditReview = (movieId: number, reviewId: number) => {
    navigate(`/update-review/${movieId}/${reviewId}`); 
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={handleBackClick}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back
      </button>
      {reviews.map((review) => (
        <div key={review.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex">
          <div className="flex flex-col items-center mr-8">
            {review.movie?.poster && (
              <img src={review.movie.poster} alt={review.movie.title} className="max-h-60 w-auto mb-2" />
            )}
            <p className="text-lg">{review.movie?.genre}</p>
            <p className="text-lg mb-4">{review.movie?.year}</p>
          </div>
          <div className="flex flex-col justify-center flex-grow">
            <h3 className="text-3xl font-bold mb-2">{review.movie?.title ?? 'Unknown Movie'}</h3>
            <div className="border p-4 rounded shadow border-gray-500 text-center mx-auto" style={{ maxWidth: '75%' }}>
              <p className="text-2xl mb-2">{review.textReview}</p>
            </div>
            <div className='text-2xl mb-2'>
              <p className=" mt-4">Review id: {review.id}</p>
              <p >Rating: {review.rating}</p>
              <p >User: {review.user.username}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleEditReview(review.movie.id, review.id)}
                className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bg-green-700"
              >
                Edit Review
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsByMoviesIDForm