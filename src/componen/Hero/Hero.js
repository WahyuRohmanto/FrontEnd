import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../ui/button";
import HeroStyled from "./hero.styled";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const data = await axios(URL);
    return data.data.results[0];
  }

  async function getDetailMovie() {
    const trending = await getTrendingMovie();
    const id = trending.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const data = await axios(URL);
    setMovie(data.data);
  }

  console.log(movie);

  useEffect(getDetailMovie, []);

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
