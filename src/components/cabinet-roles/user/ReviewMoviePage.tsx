import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../../services/magnusMovie-service';
import ReviewFormCard from '../../card/ReviewFormCard';
import { Movie } from '../../../interfaces/types';

const ReviewMoviePage = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
    
        const id = parseInt(movieId ?? '0');
        if (id) {
            getMovieDetails(id)
                .then(data => setMovie(data))
                .catch(error => console.error('Error fetching movie details:', error));
        }
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    const parsedMovieId = parseInt(movieId ?? '0');
    return (
        <div className="flex flex-col md:flex-row p-8 gap-4">
            <div className="md:w-1/3 lg:w-1/4 flex-shrink-0 mt-5">
                <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded shadow-lg" />
                <div className="bg-opacity-75 bg-black text-white p-4 rounded-b">
                    <h3 className="text-xl font-bold">{movie.title}</h3>
                    <p>Genre: {movie.genre}</p>
                    <p>Year: {movie.year}</p>
                </div>
            </div>
            <div className="flex-grow">
                <ReviewFormCard movieId={parsedMovieId} />
            </div>
        </div>
    );
};
export default ReviewMoviePage;
