import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
   // membuat state
   const [movies, setMovies] = useState([]);

   // fetch data dari axios
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(() => {
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


export default PopularMovie;
