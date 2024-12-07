import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/service/apiService";
export const fectchListMovie = createAsyncThunk(
  "ListMoviepage/fecthListMovie",
  async (_, { rejectWithvalue }: any) => {
    try {
      const result = await api.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
      return result.data.content;
    } catch (error) {
      return rejectWithvalue(error);
    }
  }
);
export type Movie = {
  maPhim: number | string;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};

type AppState = {
  loading: boolean;
  data: null | Movie[];
  error: null | any;
};
const initialState: AppState = {
  loading: false,
  data: null,
  error: null,
};

const ListMovieReducer = createSlice({
  name: "ListMovieReducer",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fectchListMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fectchListMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fectchListMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default ListMovieReducer.reducer;
