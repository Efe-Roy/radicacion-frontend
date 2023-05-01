import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import API from "../api";

const initialState = {
  user: null,
  username: null,
  error: "",
  loading: false,
  is_agent: false,
  is_support: false,
  is_organisor: false
};

export const authLogin = createAsyncThunk(
  "auth/login",
  async ({ formData, toast, router }, { rejectWithValue }) => {
    try {
      const response = await API.post("auth/rest-auth/login/", formData);
      toast.success("Iniciar sesión con éxito");
      router.push("/files");
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Los datos de acceso no son correctos");
      return rejectWithValue(err.response.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/password/change/",
  async ({ formData, toast, router }, { rejectWithValue }) => {
    try {
      const response = await API.post(
        "auth/rest-auth/password/change/",
        formData
      );
      toast.success("Contraseña cambiada con exito");
      router.push("/files");
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("La contraseña no fue cambiada correctamente");
      return rejectWithValue(err.response.data);
    }
  }
);


const authSlice = createSlice({
    name: "auth",
  initialState: initialState,
    reducers: {
    getUserId: function (state, action) {
        state.username = action.payload?.username;
        state.is_agent = action.payload?.is_agent;
        state.is_support = action.payload?.is_support;
        state.is_organisor = action.payload?.is_organisor;
    },
  },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
        .addCase(authLogin.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(authLogin.fulfilled, (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
            state.user = action.payload;
        })
        .addCase(authLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
            // state.errorMessage = `Oops! Something goes wrong!`;
        });
    },
})

export const { getUserId } = authSlice.actions;
export default authSlice.reducer;