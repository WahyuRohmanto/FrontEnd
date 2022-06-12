import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);

  async function getTopRated() {
    const data = await axios(ENDPOINTS.TOP_RATED);
    setMovies(data.data.results);
  }

  useEffect(() => {
    getTopRated();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Top Movie" movies={movies} />
    </div>
  );
}

export default TopRatedMovie;
