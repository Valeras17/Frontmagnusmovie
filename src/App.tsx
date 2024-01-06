
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Movies from "./routes/Movies";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./routes/NotFound";
import Footer from "./components/footer/Footer";
import BackgroundVideo from "./components/back-screen-video/BackgroundVideo";
import AuthContext from "./contexts/AuthContext";
import { useContext } from "react";
import ReviewPage from "./routes/ReviewPage";
import AdminHome from "./components/cabinet-roles/admin/AdminHome";
import AddMovieForm from "./components/cabinet-roles/admin/AddMovieForm";
import UpdateMovieForm from "./components/cabinet-roles/admin/UpdateMovieForm";

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
          <Route path="/reviewpage" element={<ReviewPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/add-movie" element={<AddMovieForm />} />
          <Route path="/update-movie/:movieId" element={<UpdateMovieForm />} />
        </Routes>
      </div>

      <Footer />
      <BackgroundVideo />
    </div>
  );
};

export default App;
