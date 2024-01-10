import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Movie } from '../../interfaces/types';
import { fetchMoviesByGenre } from '../../services/magnusMovie-service';
import Swal from 'sweetalert2';
import Spinner from '../spinner/Spinner';

const ListMoviesByGenre = () => {
  const { genre } = useParams<{ genre: string }>();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    if (genre) {
      setIsLoading(true);
      fetchMoviesByGenre(genre)
        .then(data => {
          setMovies(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
          setIsLoading(false);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to load movie data.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        });
    } else {

      Swal.fire({
        title: 'Genre not specified!',
        text: 'Please select a genre to view movies.',
        icon: 'warning',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/');
      });
    }
  }, [genre, navigate]);

  if (isLoading) {
    return <Spinner title="Loading..." />;
  }
  const handleMovieClick = (movieId: number) => {
    navigate(`/review-movie/${movieId}`);
};


return (
  <div>
      <h1 className="text-2xl font-bold mb-4">Movie Genre: {genre}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map(movie => (
              <div key={movie.id} className="border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
                   onClick={() => handleMovieClick(movie.id)}>
                  <div className="relative">
              {movie.poster && (
                <img src={movie.poster} alt={movie.title} className="w-full h-auto mb-3 rounded-lg transform scale-100" />
              )}
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white p-2 rounded-b-lg">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p>{movie.genre} - {movie.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMoviesByGenre;
