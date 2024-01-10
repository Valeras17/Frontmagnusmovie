import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Movie } from '../../interfaces/types';
import Spinner from '../spinner/Spinner';
import Swal from 'sweetalert2';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const searchResults = location.state?.movies || [];
        if (searchResults.length > 0) {
            setMovies(searchResults);
        } else {
            Swal.fire({
                title: 'No results!',
                text: 'No movies found with the given search criteria.',
                icon: 'info',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/');
            });
        }
        setIsLoading(false);
    }, [location.state, navigate]);

    const handleMovieClick = (movieId: number) => {
        navigate(`/review-movie/${movieId}`);
    };

    if (isLoading) {
        return <Spinner title="Loading search results..." />;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search Results</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {movies.map((movie: Movie) => (
                    <div key={movie.id} className="border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer" onClick={() => handleMovieClick(movie.id)}>
                        <div className="relative">
                            {movie.poster && (
                                <img src={movie.poster} alt={movie.title} className="w-full h-auto mb-3 rounded-lg" />
                            )}
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white p-2 rounded-b-lg">
                                <h3 className="font-bold">{movie.title}</h3>
                                <p>{movie.year} - {movie.genre}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
