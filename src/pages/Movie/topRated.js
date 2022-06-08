import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../componen/Hero/Hero";
import Movies from "../../componen/Movies/movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRated() {
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

export default TopRated;
