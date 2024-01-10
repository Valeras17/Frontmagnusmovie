import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchGenres } from '../../services/magnusMovie-service';

const GenresDropdown = () => {
    const [genres, setGenres] = useState<string[]>([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        fetchGenres()
            .then(setGenres)
            .catch(error => console.error('Error fetching genres:', error));
    }, []);

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    return (
        <div className="relative z-10"> 
            <button onClick={toggleDropdown} className="px-4 py-2 bg-black text-white rounded cursor-pointer">
                Genres
            </button>
            {dropdownVisible && (
                <div 
                    className="absolute bg-black text-white border border-white mt-2 rounded shadow-lg"
                >
                    {genres.map((genre, index) => (
                        <NavLink
                            key={index}
                            to={`/movies/${genre}`}
                            className="block px-4 py-2 hover:bg-gray-800"
                            onClick={() => setDropdownVisible(false)}
                        >
                            {genre}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GenresDropdown;
