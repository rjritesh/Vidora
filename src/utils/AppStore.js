import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./AppSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
  },
});
export default appStore;
