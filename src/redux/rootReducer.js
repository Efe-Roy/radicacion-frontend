import authSliceReducer from "./features/authSlice";
import fileSlice from "./features/fileSlice";
import trackSlice from "./features/trackSlice";
import alphaSlice from "./features/alphaSlice";

const rootReducer = {
  track: trackSlice,
  auth: authSliceReducer,
  files: fileSlice,
  alpha: alphaSlice,
};

export default rootReducer;
