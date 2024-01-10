import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import AuthContext from '../../contexts/AuthContext';
import GenresDropdown from '../card/GenresDropdown';
import Search from '../card/Search';

const Navbar = () => {
    const { isLoggedIn, userRoles, logout } = useContext(AuthContext);
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {

    }, [userRoles]);

    return (
        <nav className={`relative shadow-2xl p-4 flex justify-between items-center flex-wrap transition-colors duration-300 ${darkMode ? 'bg-white text-black' : 'bg-black text-red-600'}`}>
            <div className="flex gap-4 items-center">
                <h1 className={`font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl transition-colors duration-300 ${darkMode ? 'text-black' : 'text-red-600'}`}>
                    MagnusMovie
                </h1>

                {isLoggedIn ? (

                    <div className=' md:flex gap-4 text-lg font-semibold '>

                        

                        <div className="hidden md:flex gap-4 text-lg font-semibold">
<GenresDropdown />
                            <NavLink className='transition-transform duration-300 hover:scale-110 active:scale-135' to="/home">Home</NavLink>

                            <NavLink className='transition-transform duration-300 hover:scale-110 active:scale-135' to="/about">About</NavLink>
                            {userRoles && userRoles.includes('ROLE_ADMIN') && (
                                <NavLink className='transition-transform duration-300 hover:scale-110 active:scale-135' to="/admin-home">Admin Panel</NavLink>
                            )}
                            {userRoles && userRoles.includes('ROLE_USER') && (
                                <NavLink className='transition-transform duration-300 hover:scale-110 active:scale-135' to="/user-home">User Panel</NavLink>
                            )}
                            <Search />
                        </div>
                    </div>
                ) : (
                    <div className="hidden md:flex gap-4 text-lg font-semibold">
                        <NavLink className='transition-transform duration-300 hover:scale-110 active:scale-125' to="/about">About</NavLink>
                    </div>
                )}
            </div>

            <div className="flex gap-4 items-center text-lg font-semibold">
                {!isLoggedIn && (
                    <>
                        <NavLink className="transition-transform duration-300 hover:scale-110 active:scale-125" to="/login">Login</NavLink>
                        <NavLink className="transition-transform duration-300 hover:scale-110 active:scale-125" to="/register">Register</NavLink>
                    </>
                )}
                {isLoggedIn && (
                    <>

                        <button className="transition-transform duration-300 hover:scale-110 active:scale-125" type="button" onClick={logout}>Logout</button>
                    </>
                )}
                <button className="transition-transform duration-300 hover:scale-110 active:scale-125" type="button" onClick={toggleDarkMode}>
                    {darkMode ? <BsSunFill /> : <BsMoonFill />}
                </button>
            </div>
        </nav>
    );
};
export default Navbar;
