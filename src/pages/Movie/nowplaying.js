import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../componen/Hero/Hero";
import Movies from "../../componen/Movies/movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  // function mengambil data
  async function getNowplaying() {
    const data = await axios(ENDPOINTS.NOW_PLAYING);
    setMovies(data.data.results);
  }

  useEffect(() => {
    getNowplaying();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movie" movies={movies} />
    </div>
  );
}

export default NowPlaying;
