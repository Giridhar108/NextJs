import { createSlice } from "@reduxjs/toolkit";

import { User, Users } from "../../interface/users";

import { HYDRATE } from "next-redux-wrapper";
import { AppThunk } from "../store/store";
import { fetcher } from "../../helpers/fetcher";

const initialState: Users = {
  id: 0,
  name: "",
  users: [],
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
    setUser(state, action) {
      return {
        ...state,
        ...action.payload,
      }
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
  (url: any, id: any = ""): AppThunk =>
  async (dispatch) => {
    const data = await fetcher<Users>(url);

    dispatch(
      users.actions.setUsers({
        users: data,
      })
    );
      console.log(data)
    if (id) {
      dispatch(
        users.actions.setUsers({
            id,
            name: data.name,
        })
      );
    }
  };

export default users.reducer;
