import styles from "./movies.module.css";
import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";

function Movies(props) {
  // destructing
  const { movies, setMovies } = props;
  function tambahFilm() {
    const movie = {
      id: nanoid(),
      title: "Spiral Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies, movie]);
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/*
           * looping data movies : map
           * Render Component Movie
           * Kirim props movie
           */}
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        {/* Button menambahkan event on click */}
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
