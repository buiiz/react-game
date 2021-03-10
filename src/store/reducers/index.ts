import { combineReducers } from "redux";
import { optionsReducer } from "./optionsReducer";
import { gameReducer } from "./gameReducer";

export const rootReducer = combineReducers({
  options: optionsReducer,
  game: gameReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
