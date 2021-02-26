import { CounterAction, CounterActionTypes, CounterState } from "../../types/counter";

const initialState: CounterState = {
  value: 0,
}

export const counterReducer = (state = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { ...state, value: state.value + action.payload };
    case CounterActionTypes.DECREMENT:
      return { ...state, value: state.value - action.payload };
    case CounterActionTypes.RESET:
      return { ...state, value: 0 };
    default:
      return state;
  }
}
