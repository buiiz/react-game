import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { optionsReducer } from "./optionsReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  options: optionsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
