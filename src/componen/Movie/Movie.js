import styles from "./Movie.module.css";
import styled from "styled-components"




function Movie(props) {
  const { movie } = props;
  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src= {movie.poster} alt="" />
      <h3 className={styles.movie__title}>{movie.title}</h3>
      <p className={styles.movie__date}>{movie.year}</p>
      <h2 className={styles.movie__type}>{movie.type}</h2>
    </div>
  );
}

export default Movie;
