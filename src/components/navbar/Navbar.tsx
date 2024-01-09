import {  NavLink } from "react-router-dom";
import './Navbar.scss'
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useContext } from "react";
import DarkModeContext from "../../contexts/DarkModeContext";
import AuthContext from "../../contexts/AuthContext";

const Navbar = () => {
    const { isLoggedIn, logout, userRole } = useContext(AuthContext)
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <nav
            id="app-nav"
            className="sm:bg-slate-50 sm:gap-10 shadow-2xl p-8 gap-4 flex bg-black text-red-600 dark:bg-blend-darken dark:bg-fuchsia-50 opacity-80">
            <h1>MagnusMovie</h1>

            <NavLink to="/admin-home">Admin Panel</NavLink>
            <NavLink to="/user-home">User Panel</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <div className="">
                <NavLink to="/movies">Movies</NavLink>
            </div>
            <div className="flex-1"></div>
            <div className="" >
                <NavLink to="/login">Login</NavLink>
                <button
                    type="button"
                    onClick={() => logout()}
                >
                    Logout
                </button>
                <NavLink to="/register">Register</NavLink>
            </div>
            <button
                type="button"
                onClick={() => toggleDarkMode()}
            >
                {darkMode ? <BsSunFill /> : <BsMoonFill />}
            </button>
        </nav>
    );
};
export default Navbar;
