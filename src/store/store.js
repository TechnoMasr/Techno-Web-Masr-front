import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./setting/setting";
import languageReducer from "./languageSlice/languageSlice";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    language: languageReducer,
  },
});
