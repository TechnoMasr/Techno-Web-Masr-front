import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settings/settingsSlice";
import languageReducer from "./languageSlice/languageSlice";
import modalsReducer from "./modals/modalsSlice";
import { injectStore } from "@/api/api";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    modals: modalsReducer,
    settings: settingsReducer,
  },
});

injectStore(store);
