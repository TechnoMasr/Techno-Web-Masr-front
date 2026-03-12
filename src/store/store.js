import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settings/settingsSlice";
import languageReducer from "./languageSlice/languageSlice";
import modalsReducer from "./modals/modalsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    language: languageReducer,
    modals: modalsReducer,
  },
});
