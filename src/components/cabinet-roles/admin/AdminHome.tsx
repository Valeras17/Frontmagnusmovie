
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const navigate = useNavigate();

    const handleStartEditMoviesClick = () => {
        navigate('/edit-movies');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className='font-bold text-4xl text-yellow-600 mb-6'>Admin Panel</h1>
            <button
                className="bg-blue-700 text-white py-2 px-6 rounded transition transform hover:scale-110 hover:bg-blue-800 focus:outline-none my-2"
                onClick={handleStartEditMoviesClick}
            >
                Start Edit Movies
            </button>
        </div>
    );
};

export default AdminHome;
