export interface CounterState {
  value: number;
}

export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
}

export interface IncrementAction {
  type: CounterActionTypes.INCREMENT;
  payload: number;
}
export interface DecrementAction {
  type: CounterActionTypes.DECREMENT;
  payload: number;
}
export interface ResetAction {
  type: CounterActionTypes.RESET;
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction;
