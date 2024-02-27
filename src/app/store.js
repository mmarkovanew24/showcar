import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./reducer";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
