import React, { useState } from 'react';
import { deleteMovie } from '../../../services/magnusMovie-service';
import Swal from 'sweetalert2';

const DeleteMoviesForm = () => {
    const [movieId, setMovieId] = useState('');

    const handleDelete = async () => {
        const id = parseInt(movieId, 10); 
        if (isNaN(id)) {
            Swal.fire('Error', 'Please enter a valid movie ID', 'error');
            return;
        }
    
        try {
            await deleteMovie(id);
            Swal.fire('Deleted!', 'Movie has been deleted successfully', 'success');
        } catch (error) {
            Swal.fire('Error', 'Failed to delete movie', 'error');
        }
    };
    

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Delete Movie</h2>
            <input 
                type="number" 
                className="border border-gray-300 p-2 rounded w-full mb-4" 
                placeholder="Enter Movie ID to delete"
                value={movieId}
                onChange={(e) => setMovieId(e.target.value)}
            />
            <button 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
                onClick={handleDelete}
            >
                Delete Movie
            </button>
        </div>
    );
};

export default DeleteMoviesForm;
