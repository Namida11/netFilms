import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: [],
  favorites: [],
};
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    // addToFavorites: (state, action) => {
    //   const movieToAdd = action.payload;
    //   state.favorites = [...state.favorites, movieToAdd];
    // },
    // addToFavorites: (state, action) => {
    //   const movieToAdd = action.payload;
    //   state.favorites = [
    //     ...state.favorites,
    //     { ...movieToAdd, isFavorited: true },
    //   ];
    // },

    // removeFromFavorites: (state, action) => {
    //   const movieToRemove = action.payload;
    //   state.favorites = state.favorites.filter(
    //     (movie) => movie.id !== movieToRemove.id
    //   );
    // },
    addToFavorites: (state, action) => {
      const movieToAdd = action.payload;
      const existingMovie = state.favorites.find(
        (movie) => movie.id === movieToAdd.id
      );

      if (existingMovie) {
        existingMovie.isFavorited = !existingMovie.isFavorited;
      } else {
        state.favorites = [
          ...state.favorites,
          { ...movieToAdd, isFavorited: true },
        ];
      }
    },
    removeFromFavorites: (state, action) => {
      const movieToRemove = action.payload;
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== movieToRemove.id
      );
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    // removeFromFavorites: (state, action) => {
    //   const movieToRemove = action.payload;
    //   state.favorites = state.favorites.filter(
    //     (movie) => movie.id !== movieToRemove.id
    //   );
    // },
  },
});

export const { setMovies, addToFavorites, setFavorites, removeFromFavorites } =
  movieSlice.actions;

export default movieSlice.reducer;
