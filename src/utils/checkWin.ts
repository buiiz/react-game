import { GameStateType, PlayerType } from "../types/game";

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

export const checkWin = (state: GameStateType): PlayerType | null => {
  let res: PlayerType | null = null;

  lines.forEach(([a, b, c]) => {
    const isGameFinished = state[a] !== '' && state[a] === state[b] && state[a] === state[c]
    if (isGameFinished) {
      res = state[a];
    }
  })

  const isGameFinished = state.filter(player => player !== '').length === state.length
  if (isGameFinished) {
    res = 'draw'
  }

  return res;
}
