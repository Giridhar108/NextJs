import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import count from "./count";
import { Count } from "../../interface/count";

export interface State {
  count: Count;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE");
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        count,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;