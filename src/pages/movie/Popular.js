import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
  // membuat state

  //membuat dispatch
  const dispatch = useDispatch();

  // fetch data dari axios
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fungsi popular movie untuk mengambil data
  async function getPopularMovies() {
    const data = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovies(data.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movie" />
    </>
  );
}

export default PopularMovie;
