import React, { useEffect, useState } from 'react';
import { movieRequest } from '../../../services/magnusMovie-service';
import { useNavigate } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  
}

const AdminHome = () => {
  const [movies, setMovies] = useState<Movie[]>([]); 
  const navigate = useNavigate();
  const handleAddMovieClick = () => {
    navigate('/add-movie');
  };

  const handleUpdateMovieClick = () => {
    // Здесь вы можете добавить логику выбора фильма для обновления
    // Например, использовать первый фильм в списке
    const firstMovieId = movies[0]?.id;
    navigate(`/update-movie/${firstMovieId}`);
  };


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieRequest();
        setMovies(response.data);
      } catch (error) {
        console.error('Error loading movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className='font-bold text-4xl text-yellow-600 mb-6'>Admin Panel</h1>
      <div className="flex flex-col items-center">
        <button
          className="bg-green-700 text-white py-2 px-6 rounded transition transform hover:scale-110 hover:bg-green-800 focus:outline-none my-2 w-50"
          onClick={handleAddMovieClick}
        >
          Add New Movie
        </button>
        <button
          className="bg-blue-700 text-white py-2 px-6 rounded transition transform hover:scale-110 hover:bg-blue-800 focus:outline-none my-2 w-40"
          onClick={handleUpdateMovieClick}
        >
          Update Movie
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
