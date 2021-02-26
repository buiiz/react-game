import { Dispatch } from "redux";
import {
  IncrementAction,
  DecrementAction,
  ResetAction,
  CounterActionTypes
} from "../../types/counter";

export const increment = () => (dispatch: Dispatch<IncrementAction>) => {
  return dispatch({ type: CounterActionTypes.INCREMENT, payload: 1 });
}

export const decrement = () => (dispatch: Dispatch<DecrementAction>) => {
  return dispatch({ type: CounterActionTypes.DECREMENT, payload: 1 });
}

export const reset = () => (dispatch: Dispatch<ResetAction>) => {
  return dispatch({ type: CounterActionTypes.RESET });
}


