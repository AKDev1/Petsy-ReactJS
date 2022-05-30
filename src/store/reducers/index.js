import { combineReducers } from "redux";
import { reducer, userReducer } from "./reducers";

export const reducers = combineReducers({
  allDogs: reducer,
  allUsers: userReducer
})