import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../componen/Hero/Hero";
import Movies from "../../componen/Movies/movies";

function TopRated() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);

  async function getTopRated() {
    const data = await axios(URL);
    setMovies(data.data.results);
  }

  useEffect(() => {
    getTopRated();
  }, []);

  return (
    <div>
      <Hero  />
      <Movies movies={movies} />
    </div>
  );
}

export default TopRated;
