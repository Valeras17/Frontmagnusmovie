
import { useNavigate } from 'react-router-dom';

const EditMovies = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-around min-h-screen ">
            <div>
                <h1 className='font-bold text-4xl text-yellow-600 mb-6 text-center'>Edit Movies</h1>
                <button
                    className="m-6 bg-green-700 text-white py-2 px-6 rounded transition transform hover:scale-110 hover:bg-green-800 focus:outline-none my-2"
                    onClick={() => navigate('/add-movie')}
                >
                    Add New Movie
                </button>
                <button
                    className="bg-blue-700 text-white py-2 px-6 rounded transition transform hover:scale-110 hover:bg-blue-800 focus:outline-none my-2"
                    onClick={() => navigate('/get-all-movies')}
                >
                    Update / Delete
                </button>
            </div>
            <button 
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
        </div>
    );
};

export default EditMovies;
