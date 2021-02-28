import { GameAction, GameActionTypes, GameState } from "../../types/game";
import * as localStorage from "../../utils/localStorage";

const state = localStorage.get('game')

const initialState: GameState = {
  gameState: state?.gameState ?? [],
  currentPlayer: state?.currentPlayer ?? 'x',
  moves: state?.moves ?? 0,
  // history: state?.history ?? [],
}

export const gameReducer = (state = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case GameActionTypes.NEW_GAME:
      return { ...state, gameState: [...Array(9).fill(null)], moves: 0, currentPlayer: 'x' };
    case GameActionTypes.CLOSE_GAME:
      return { ...state, gameState: [], moves: 0, currentPlayer: 'x' };
    case GameActionTypes.MOVE:
      const newGameState = [...state.gameState]
      newGameState[action.payload] = state.currentPlayer
      return {
        ...state,
        gameState: newGameState,
        currentPlayer: state.currentPlayer === 'x' ? 'o' : 'x',
        moves: state.moves + 1
      };
    default:
      return state;
  }
}