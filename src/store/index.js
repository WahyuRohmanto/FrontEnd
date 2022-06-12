// import configureStore : untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice/index";

/**
 * membuat store : untuk state global
 * menerima param object : reducer
 * menyimpan slice yang sudah di buat
 */
const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// Export defaul store
export default store;
