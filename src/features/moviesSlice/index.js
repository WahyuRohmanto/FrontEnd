// import createSlice untuk membuat slice
import data from "../../utils/constants/data";
import { createSlice } from "@reduxjs/toolkit";

/**
 * Buat slice : untuk menghasilkan action dan reducer
 * menerima param object : name, initialState, reducers
 */
const moviesSlice = createSlice({
  name: "Movie Slice", //nama slice
  initialState: {
    //   nilai awal state movies
    movies: data,
  },
  reducers: {
    //   membuat reducer : untuk update state
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
    deleteMovie() {},
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

// generate action dan reducers
const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie, updateMovies } = moviesSlice.actions;

// export reducer dan actions
export default moviesReducer;
export { addMovie, deleteMovie, updateMovies };
