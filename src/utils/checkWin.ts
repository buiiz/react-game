import { GameStateType } from "../types/game";

const lines: Array<Array<number>> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const checkWin = (state: GameStateType) => {
  let res = null;

  lines.forEach(([a, b, c]) => {
    if (state[a] !== '' && state[a] === state[b] && state[a] === state[c]) {
      res = state[a];
    }
  })

  return res;
}

export const checkDraw = (state: GameStateType) => {
  return state.filter(player => player !== '').length === state.length
}