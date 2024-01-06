
import { useQuery } from "react-query";
import Spinner from "../components/spinner/Spinner";
import { movieRequest } from "../services/magnusMovie-service";
import MovieSlider from '../components/slider/MovieSlider';
import { AxiosError } from "axios";
import ErrorCard from "../components/card/ErrorCard";
import { useVideo } from "../contexts/VideoContext";
import { useEffect } from "react";


interface Movie {
  id: number;
  title: string;
  year: string;
  url: string;
  poster: string;
  genre: string;
  backdropScreen: string;
}

const Movies = () => {
  const { isLoading, data: res, error } = useQuery("get-movies", movieRequest);
  const { setVideoUrl } = useVideo();
  useEffect(() => {
    if (res?.data?.length) {
      const randomMovie = res.data[Math.floor(Math.random() * res.data.length)];
      setVideoUrl(randomMovie?.url);
    }
  }, [res?.data, setVideoUrl]);


  if (isLoading) {
    return <Spinner />;
  }


  if (error) {
    let errorCode = 0;
    let errorMessage = "";

    if (error instanceof AxiosError) {
      errorCode = error.response ? error.response.status : 0;

    }

    return <ErrorCard errorCode={errorCode} message={errorMessage} />;
  }

  const movie = res?.data[Math.floor(Math.random() * res.data.length)];

  return (
    <div className='w-full text-white'>
      <div className='h-[600px] relative'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black '></div>
        <img
          className='w-full h-full object-cover opacity-90'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdropScreen}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            Genre: {movie?.genre}
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.year}
          </p>
        </div>
      </div>
      <div className=' cursor-pointer mt-12 py-2 scale-110 max-w-screen-2xl mx-auto'>

        <MovieSlider movies={res?.data} />
      </div>
      <div className='w-full text-white'>


      </div>
    </div>
  );
};

export default Movies;
