import { createSlice } from "@reduxjs/toolkit";
import { Car } from "../asserts/types/car";

const initialState = {
  carInfo: new Car(),
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCar: (state, action) => {
      state.carInfo = action.payload;
    },
  },
});

export const { setCar } = carSlice.actions;

export const selectCarInfo = (state) => state.car.carInfo;

export default carSlice.reducer;
