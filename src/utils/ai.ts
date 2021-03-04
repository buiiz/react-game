import Board from 'tictactoe-board';
import Minimax from 'ttt-minimax-typescript';
import { GameStateType } from '../types/game';

export const moveO = (state: GameStateType) => {
  const board = new Board(state);
  const minimax = new Minimax('X', 'O');

  return minimax.findBestMove(board)
}
