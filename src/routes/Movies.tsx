import { useQuery } from "react-query";
import Spinner from "../components/spinner/Spinner";
import { movieRequest } from "../services/magnusMovie-service";



const Movies = () => {
  const { isLoading, data: res } = useQuery("get-movies", movieRequest);

  if (isLoading) {
    return <Spinner />;
  }

  
  const movie = res?.data[Math.floor(Math.random() * res.data.length)];

  

  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdropScreen}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
          <p className='text-gray-400 text-sm'>
            Genre: {movie?.genre}
          </p>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.year}
          </p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Movies;
