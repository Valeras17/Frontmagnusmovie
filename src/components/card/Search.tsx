import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMoviesByTitle } from '../../services/magnusMovie-service';
import Swal from 'sweetalert2';
import Spinner from '../spinner/Spinner';

const Search = () => {
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSearch = async () => {
        try {
            setIsLoading(true);
            const results = await searchMoviesByTitle(title);
            setIsLoading(false);
            
            navigate('/search-results', { state: { movies: results } });
        } catch (error) {
            console.error('Error during search:', error);
            setIsLoading(false);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to perform search.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    if (isLoading) {
        return <Spinner title="Searching movies..." />;
    }

    return (
        <div className="p-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter movie title..."
                className="border p-2 rounded mr-2"
            />
            <button 
                onClick={handleSearch}
                className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Search
            </button>
        </div>
    );
};

export default Search;
