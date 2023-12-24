import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./moviesSlice"
import  slideBarReducer  from "./sideBarSlice";

export default configureStore({
  reducer: {
    movies: movieReducer,
    slideBar: slideBarReducer,
  },
});
