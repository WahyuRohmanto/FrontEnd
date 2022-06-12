import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../ui/Button";
import HeroStyled from "./hero.styled";
import ENDPOINTS from "../../utils/constants/endpoint";

function Hero() {
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  async function getTrendingMovie() {
    const data = await axios(ENDPOINTS.TRENDING);
    return data.data.results[0];
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getDetailMovie() {
    const trending = await getTrendingMovie();
    const id = trending.id;

    const data = await axios(ENDPOINTS.TRENDINGID(id));
    setMovie(data.data);
  }

  useEffect(() => {
    getDetailMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HeroStyled>
      <section>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button as="a" href={`https://www.youtube.com/watch?v=${idTrailer}`} target="_blank" variant="primary">
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title} />
        </div>
      </section>
    </HeroStyled>
  );
}

export default Hero;
