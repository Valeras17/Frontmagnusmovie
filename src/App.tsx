
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Movies from "./components/slider/Movies";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./routes/NotFound";
import Footer from "./components/footer/Footer";
import BackgroundVideo from "./components/back-screen-video/BackgroundVideo";
import AuthContext from "./contexts/AuthContext";
import { useContext } from "react";
import AdminHome from "./components/cabinet-roles/admin/AdminHome";
import AddMovieForm from "./components/cabinet-roles/admin/AddMovieForm";
import UpdateMovieForm from "./components/cabinet-roles/admin/UpdateMovieForm";
import GetAllMoviesForm from "./components/cabinet-roles/admin/GetAllMoviesForm";
import EditMovies from "./components/cabinet-roles/admin/EditMovies";
import ReviewMoviePage from "./components/cabinet-roles/user/ReviewMoviePage";
import MoviesWithReviewsForm from "./components/cabinet-roles/user/ReviewsByMoviesIDForm";
import UserHome from "./components/cabinet-roles/user/UserHome";
import UpdateReviewForm from "./components/cabinet-roles/user/UpdateReviewForm";
import ReviewsByMoviesIDForm from "./components/cabinet-roles/user/ReviewsByMoviesIDForm";


const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/review-movie/:movieId" element={<ReviewMoviePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/add-movie" element={<AddMovieForm />} />
          <Route path="/update-movie/:movieId" element={<UpdateMovieForm />} />
          <Route path="/get-all-movies" element={<GetAllMoviesForm />} />
          <Route path="/edit-movies" element={<EditMovies />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/reviews-with-movies" element={<ReviewsByMoviesIDForm />} />
          <Route path="/update-review/:movieId/:reviewId" element={<UpdateReviewForm />} />


    
    
    
        </Routes>
      </div>
      
      <Footer />
      <BackgroundVideo />
    </div>
  );
};

export default App;
