import { NavLink } from "react-router-dom";
import './Navbar.scss'
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import DarkModeContext from "../../contexts/DarkModeContext";
import AuthContext from "../../contexts/AuthContext";

const Navbar = () => {
    const { isLoggedIn, logout } = useContext(AuthContext)
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <nav
            id="app-nav"
            className="sm:bg-slate-300 sm:gap-10 shadow-2xl p-8 gap-4 flex bg-gray-500 text-red-600 dark:bg-blend-darken dark:bg-fuchsia-50">

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>

            <div className="hidden sm:flex sm:gap-10">
                {isLoggedIn && <NavLink to="/movies">Movies</NavLink>}
                {isLoggedIn && <NavLink to="/review">Review</NavLink>}
            </div>

            <div className="flex-1"></div>
            <div className="hidden sm:flex sm:gap-10" >
                {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
                {isLoggedIn && <button
                    onClick={() => {

                        logout();

                    }}>Logout</button>}

                {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
            </div>

            <button
                onClick={() => {
                    toggleDarkMode();
                }}
            >
                {darkMode ? <BsSunFill /> : <BsMoonFill />}
            </button>


        </nav>
    );
};
export default Navbar;