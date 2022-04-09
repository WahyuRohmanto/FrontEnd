import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/alert";
import styles from "./addMovie.module.css";

function Add(props) {
  // destructing
  const { movies, setMovies } = props;
  // membuat state title
  const [title, setTitle] = useState(" ");
  // membuat state date
  const [date, setDate] = useState("");
  // membuat state pict
  const [pict, setPict] = useState("");
  // membuat state pict
  const [type, setType] = useState("");

  // Membuat state title dan date error/empty
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPictError, setIsPictError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);

  // membuat handle title
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  // membuat handle date
  function handleDate(e) {
    setDate(e.target.value);
  }
  // membuat handle pict
  function handlePict(e) {
    setPict(e.target.value);
  }
  // membuat handle type
  function handleType(e) {
    setType(e.target.value);
  }

  // handle submit
  function handleSubmit(e) {
    // mencegah prilaku default
    e.preventDefault();
    // jika title kosong maka set error title true
    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsTitleError(false);
      setIsDateError(true);
    } else if (pict === "") {
      setIsDateError(false);
      setIsPictError(true);
    } else if (type === "") {
      setIsTypeError(true);
      setIsPictError(false);
    } else {
      // Siapkan movie yang akan diinput
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: pict,
      };

      setMovies([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
      setIsPictError(false);
      setIsTypeError(false);
    }
  }
  return (
    <div className={styles.container}>
      <section className={styles.add}>
        <div className={styles.contaner__left}>
          <img className={styles.add__img} src="https://picsum.photos/300/350" alt="" />
        </div>

        <div className={styles.container__right}>
          <h1 className={styles.add__title}>Add Movie</h1>
          <form action="" onSubmit={handleSubmit}>
            <label className={styles.add__label} htmlFor="">
              Title
            </label>
            <input onChange={handleTitle} className={styles.add__input} type="text" value={title} />
            {/* jika error title true : muncul error
                Jika tidak, munculkan string kosong  
              */}
            {isTitleError && <Alert>Judul Wajib Diiisi</Alert>}
            <label className={styles.add__label} htmlFor="">
              Year
            </label>
            <input onChange={handleDate} className={styles.add__input} type="number" value={date} />
            {isDateError && <Alert>Tanggal Wajib Diiisi</Alert>}
            <label className={styles.add__label} htmlFor="">
              Link Gambar
            </label>
            <input onChange={handlePict} className={styles.add__input} type="text" value={pict} />
            {isPictError && <Alert>Silahkan Masukan Gambar</Alert>}
            <select onChange={handleType} className={styles.add__select} name="" id="">
              <option className={styles.add__option} value="">
                Select Genre
              </option>
              <option className={styles.add__option} value="Drama">
                Drama
              </option>
              <option className={styles.add__option} value="Horor">
                Horor
              </option>
              <option className={styles.add__option} value="Comedy">
                Comedy
              </option>
              <option className={styles.add__option} value="DLL">
                DLL
              </option>
            </select>
            {isTypeError && <Alert>Silahkan Pilih Genre</Alert>}
            <button className={styles.add__button}>submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Add;
