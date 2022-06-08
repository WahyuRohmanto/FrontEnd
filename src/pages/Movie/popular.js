import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../componen/Hero/Hero";
import Movies from "../../componen/Movies/movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Popular() {
  // membuat state
  const [movies, setMovies] = useState([]);

  // fetch data dari axios
  useEffect(async () => {
    getPopularMovies();
  }, []);

  // Fungsi popular movie untuk mengambil data
  async function getPopularMovies() {
    const data = await axios(ENDPOINTS.POPULAR);
    setMovies(data.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movie" movies={movies} />
    </>
  );
}

export default Popular;
