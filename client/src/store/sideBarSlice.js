// slideBarSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSlideBarOpen: true,
};

export const slideBarSlice = createSlice({
  name: "slideBar",
  initialState,
  reducers: {
    toggleSlideBar: (state) => {
      state.isSlideBarOpen = !state.isSlideBarOpen;
    },
  },
});

export const { toggleSlideBar } = slideBarSlice.actions;

export default slideBarSlice.reducer;
