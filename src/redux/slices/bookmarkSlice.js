import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",

  initialState,

  reducers: {
    setBookmarks: (state, action) => {
      state.bookmarks = action.payload;
    },

    addBookmark: (state, action) => {
      const exists = state.bookmarks.find(
        (movie) => movie.id === action.payload.id
      );

      if (!exists) {
        state.bookmarks.push(action.payload);
      }
    },

    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  setBookmarks,
  addBookmark,
  removeBookmark,
} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;