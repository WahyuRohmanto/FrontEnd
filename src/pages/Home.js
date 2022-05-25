import { useState } from "react";
import Add from "../componen/AddMovie/addMovie";
import Hero from "../componen/Hero/Hero";
import Movies from "../componen/Movies/movies";
import data from "../utils/constants/data";

function Home() {
  const [movies, setMovies] = useState(data);
  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <Add movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default Home;
