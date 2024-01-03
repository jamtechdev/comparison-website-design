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
        proName: action.payload.name,
        catID: action.payload.category_id,
        permaLink: action.payload.permalink,
        position: action.payload.position,
      };
      state.compareProduct.push(comparedPro);
    },
  },
});
export const { addCompareProduct } = compareProSlice.actions;

export default compareProSlice.reducer;
