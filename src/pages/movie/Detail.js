import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail() {
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    getRecomendedMovies();
  }, [params.id]);

  async function getRecomendedMovies() {
    const data = await axios(ENDPOINTS.REKOMENDASI(params.id));
    dispatch(updateMovies(data.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recomended Movie" />
    </>
  );
}

export default Detail;
