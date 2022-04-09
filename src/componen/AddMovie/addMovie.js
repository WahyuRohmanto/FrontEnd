import styles from "./addMovie.module.css";

function Add() {
  return (
    <div className={styles.container}>
      <section className = {styles.add}>
      <div className={styles.contaner__left}>
        <img className={styles.add__img} src="https://picsum.photos/300/300" alt="" />
      </div>
      
      <div className={styles.container__right}>
        <h1 className={styles.add__title}>Add Movie</h1>
        <form action="">
          <label className={styles.add__label} htmlFor="">Title</label>
          <input className={styles.add__input} type="text" />
          <label className={styles.add__label} htmlFor="">Year</label>
          <input className={styles.add__input} type="text" />
          <button className = {styles.add__button}>submit</button>
        </form>
      </div>
      </section>
     
    </div>
  );
}

export default Add;
