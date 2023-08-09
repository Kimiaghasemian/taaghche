import { configureStore } from "@reduxjs/toolkit";
import bookListSlice from "./bookListSlice";

export const store = configureStore({
  reducer: {
    bookList: bookListSlice,
  },
});
