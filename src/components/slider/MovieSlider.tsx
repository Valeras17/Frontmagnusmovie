import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  year: string;
  backdropScreen: string;
  genre: string;
}

interface MovieSliderProps {
  movies: Movie[];
}


const MovieSlider: React.FC<MovieSliderProps> = ({ movies }) => {
  const navigate = useNavigate();

    const handleSlideClick = (movieId: number) => {
        navigate(`/review-movie/${movieId}`);
    };
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {movies.map(movie => (
        <div key={movie.id} className="px-2 cursor-pointer" onClick={() => handleSlideClick(movie.id)}>
          <div className="transition-transform duration-300 transform hover:scale-125">
            <img
              className="w-full h-64 object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/original/${movie.backdropScreen}`}
              alt={movie.title}
            />
            <h3 className="text-lg text-white">{movie.title}</h3>
            
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MovieSlider;
