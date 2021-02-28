import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { optionsReducer } from "./optionsReducer";
import { gameReducer } from "./gameReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  options: optionsReducer,
  game: gameReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
