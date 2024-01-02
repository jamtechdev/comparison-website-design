"use client";

import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  compareProduct: [],
};
export const compareProSlice = createSlice({
  name: "compareProduct",
  initialState,
  reducers: {
    addCompareProduct: (state, action) => {
      const comparedPro = {
        id: nanoid(),
        text: action.payload,
      };
      state.compareProduct.push(comparedPro);
    },
  },
});

export const { addCompareProduct } = compareProSlice.actions;
export default addCompareProduct.reducer;
