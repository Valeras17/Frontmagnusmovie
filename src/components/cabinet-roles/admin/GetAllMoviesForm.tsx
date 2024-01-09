import { useEffect, useState } from 'react';
import { deleteMovie, fetchAllMovies, movieRequestWithPagination } from '../../../services/magnusMovie-service';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Pagination from '../../card/Pagination';
import { Review, User, Movie,NewReviewData } from '../../../interfaces/types'




const GetAllMoviesForm = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const handleDelete = async (movieId: number) => {
    try {
      await deleteMovie(movieId);
      Swal.fire('Deleted!', 'Movie has been deleted successfully', 'success');
      setMovies(movies.filter((movie) => movie.id !== movieId));
    } catch (error) {
      Swal.fire('Error', 'Failed to delete movie', 'error');
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("Sending request to server for all movies");
        const allMovies = await fetchAllMovies();
        console.log("All movies response received:", allMovies);
        setMovies(allMovies); 
      } catch (error) {
        console.error('Error loading movies:', error);
      }
    };
  
    fetchMovies();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>

      {movies.map((movie) => (
        <div key={movie.id} className="movie-card bg-white p-4 rounded-lg shadow-md mb-4 flex hover:bg-green-100 transform hover:scale-105 transition-transform duration-300">
          <img src={movie.poster} alt={movie.title} className="w-16 h-auto rounded mr-4" />
          <div className="movie-details text-lg font-bold text-black flex-grow">
            <p>ID: {movie.id}</p>
            <p>Title: {movie.title}</p>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate(`/update-movie/${movie.id}`)}
            >
              Update Movie
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(movie.id)}
            >
              Delete Movie
            </button>
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default GetAllMoviesForm;
