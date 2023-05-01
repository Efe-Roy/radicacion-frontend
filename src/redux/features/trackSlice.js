import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api";

const initialState = {
  resNum: null,
  data: null,
  error: "",
  loading: false,
};

export const underReview = createAsyncThunk(
  "under-review/",
  async ({ formData, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`under-review/${id}/`, formData);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const Review = createAsyncThunk(
  "review/",
  async ({ formData1, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`review/${id}/`, formData1);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const Observation = createAsyncThunk(
  "observation/",
  async ({ formData2, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`observation/${id}/`, formData2);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const Notified = createAsyncThunk(
  "Notified/",
  async ({ formData3, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`notified/${id}/`, formData3);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const Documentt = createAsyncThunk(
  "document/",
  async ({ formData4, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`document/${id}/`, formData4);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", formData4);
      return response.data;
    } catch (err) {
        console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const actProcedure = createAsyncThunk(
  "document/",
  async ({ formData5, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`act-procedure/${id}/`, formData5);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const personalNotified = createAsyncThunk(
  "document/",
  async ({ formData6, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`personal-notified/${id}/`, formData6);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const payment = createAsyncThunk(
  "payment/",
  async ({ formData7, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`payment/${id}/`, formData7);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const paymentDoc = createAsyncThunk(
  "paymentDoc/",
  async ({ formData8, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`payment-doc/${id}/`, formData8);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const resolution = createAsyncThunk(
  "resolution/",
  async ({ formData9, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(`resolution/${id}/`, formData9);
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const resolutionNotification = createAsyncThunk(
  "resolutionNotification/",
  async ({ formData10, toast, router, id }, { rejectWithValue }) => {
    try {
      const response = await API.put(
        `resolution-notification/${id}/`,
        formData10
      );
      toast.success("Created Successfully");
      router.push("/files/" + id);
      console.log("response", response.data);
      return response.data;
    } catch (err) {
      //   console.log("13", err);
      toast.error("Unable to Create with provided credentials.");
      //   return rejectWithValue(err.response.data);
    }
  }
);

export const getResNum = createAsyncThunk("ResNum", async () => {
  let response = await API.get("resolution-num/");
  console.log("Res Num",response.data)
  return response.data;
});


const fileSlice = createSlice({
  name: "files",
  initialState: initialState,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getResNum.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getResNum.fulfilled, (state, action) => {
        state.loading = false;
        state.resNum = action.payload
      })
      .addCase(getResNum.rejected, (state, action) => {
        state.loading = false;
        state.error = `Oops! Something went wrong! Go back to file`;
      });
  },
});

// export const { getUserId } = fileSlice.actions;
export default fileSlice.reducer;
