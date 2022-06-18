import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlayingMovie() {
  //Membuat dispatch
  const dispatch = useDispatch();

  // function mengambil data
  async function getNowplaying() {
    const data = await axios(ENDPOINTS.NOW_PLAYING);
    dispatch(updateMovies(data.data.results));
  }

  useEffect(() => {
    getNowplaying();
  }, []);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movie" />
    </div>
  );
}

export default NowPlayingMovie;
