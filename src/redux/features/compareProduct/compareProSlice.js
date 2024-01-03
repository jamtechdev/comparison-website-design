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
      console.log(state, "state", action, "action");
      const comparedPro = {
        proName: action.payload.name,
        catID: action.payload.category_id,
        permaLink: action.payload.permalink,
        position: "1st",
      };
      state.compareProduct.push(comparedPro);
    },
  },
});
export const { addCompareProduct } = compareProSlice.actions;

export default compareProSlice.reducer;
