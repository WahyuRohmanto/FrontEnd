import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {
  //Membuat dispatch
  const dispatch = useDispatch();

  async function getTopRated() {
    const data = await axios(ENDPOINTS.TOP_RATED);
    dispatch(updateMovies(data.data.results));
  }

  useEffect(() => {
    getTopRated();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Top Movie" />
    </div>
  );
}

export default TopRatedMovie;
