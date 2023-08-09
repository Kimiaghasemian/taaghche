import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooksList } from "../apis/getBookList";

const initialState = {
  isLoading: false,
  error: null,
  entities: [],
};

export const getBookListAsync = createAsyncThunk(
  "bookList/getBookList",
  async () => {
    const response = await getBooksList();
    return response;
  }
);

const bookListSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookListAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBookListAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload?.bookList?.books;
      })
      .addCase(getBookListAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectBookList = (state) => state.bookList.entities;
export const selectIsLoading = (state) => state.bookList.isLoading;
export const selectError = (state) => state.bookList.error;

export default bookListSlice.reducer;
