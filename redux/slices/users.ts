import { createSlice } from "@reduxjs/toolkit";

import { Users } from "../../interface/users";

import { HYDRATE } from "next-redux-wrapper";
import { AppThunk } from "../store/store";
import { fetcher } from "../../helpers/fetcher";

const initialState: Users = {
  id: 0,
  name: "",
  users: [],
};

export const users = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload;
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

export const fetchSubject =
  (url: any): AppThunk =>
  async (dispatch) => {
    const data = await fetcher<Users[]>(url);

    dispatch(
      users.actions.setUser({
        users: data,
      })
    );
  };

export default users.reducer;
