import { useState } from "react";
import Add from "../componen/AddMovie/addMovie";
import Footer from "../componen/Footer/footer";
import Hero from "../componen/Hero/Hero";
import Movies from "../componen/Movies/movies";
import Navbar from "../componen/Navbar/navbar";
import data from "../utils/constants/data";


function Main() {
  const [movies, setMovies] = useState(data);
  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies ={setMovies}/>
      <Add  movies={movies} setMovies ={setMovies} />
    </div>
  );
}
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
