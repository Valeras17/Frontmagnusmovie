import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Register from "./routes/Register"
import Login from "./routes/Login"
import Review from "./routes/Review"
import Movies from "./routes/Movies"
import Navbar from "./components/navbar/Navbar"
import NotFound from "./routes/NotFound"
import { useContext } from "react"

import AuthContext from "./contexts/AuthContext";


const App = () => {

  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {!isLoggedIn && <Route path="/register" element={<Register />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/review" element={<Review />} />}
        {isLoggedIn &&<Route path="/movies" element={<Movies />} />}
        
        <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  )
}

export default App