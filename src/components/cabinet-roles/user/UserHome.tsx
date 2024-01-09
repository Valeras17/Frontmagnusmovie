
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
  const navigate = useNavigate();

  const handleEditReviews = () => {
    navigate('/reviews-with-movies'); 
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">User's Panel</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleEditReviews}
        >
          Edit Reviews
        </button>
      </div>
    </div>
  );
};

export default UserHome;
