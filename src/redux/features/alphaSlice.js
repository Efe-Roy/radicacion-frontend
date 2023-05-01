import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api";

const initialState = {
  fileById: null,
  filesTrack: null,
  error: "",
  loading: false,
};

export const getFileNum = createAsyncThunk(
  "api/fileNum/file-number",
  async (fileNumk, { rejectWithValue }) => {
    try {
      console.log("testk", fileNumk);
      const res = await API.get(`file-search/${fileNumk}`);
      // console.log(res.data);
      return res.data;
    } catch (err) {
      console.log("11", err);
      return rejectWithValue(err.response.data);
    }
  }
);

const alphaSlice = createSlice({
  name: "files",
  initialState: initialState,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getFileNum.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getFileNum.fulfilled, (state, action) => {
        state.loading = false;
        state.fileById = action.payload?.files;
        state.filesTrack = action.payload?.filesTrack;
        state.error = "";
      })
      .addCase(getFileNum.rejected, (state, action) => {
        state.loading = false;
        state.error = `Oops! File Number does no exist`;
      });
  },
});

// export const { getUserId } = fileSlice.actions;
export default alphaSlice.reducer;
