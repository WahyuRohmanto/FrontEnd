import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../componen/Hero/Hero";
import Movies from "../../componen/Movies/movies";

function Popular() {
  //Definisi API dan URL
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  // membuat state
  const [movies, setMovies] = useState([]);

  // fetch data dari axios
  useEffect(async () => {
    getPopularMovies();
  }, []);


  // Fungsi popular movie untuk mengambil data
  async function getPopularMovies() {
    const data = await axios(URL);
    setMovies(data.data.results);
  }



  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default Popular;
