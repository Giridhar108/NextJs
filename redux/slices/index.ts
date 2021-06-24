import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import count from "./count";
import users from "./users";
import { Count } from "../../interface/count";
import { Users } from "../../interface/users";

export interface State {
  count: Count;
  users: Users
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE");
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        count,
        users,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;