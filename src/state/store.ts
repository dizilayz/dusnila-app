import { configureStore } from "@reduxjs/toolkit";
import thermometerSlice from "./counter/thermometerSlice";


export const store = configureStore({
  reducer: {
    thermometer: thermometerSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;