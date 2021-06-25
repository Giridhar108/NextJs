import { createSlice } from "@reduxjs/toolkit";

import { Count } from "../../interface/count";

import { HYDRATE } from "next-redux-wrapper";

const initialState: Count = {
  number: 0,
};

export const posts = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
  },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        console.log("HYDRATE", state, action.payload);
        return {
          ...state,
          ...action.payload.subject,
        };
      },
    },
});

export const { increment, decrement } = posts.actions;

export default posts.reducer;
