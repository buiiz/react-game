export type PlayerType = 'x' | 'o' | null
export type GameStateType = Array<PlayerType>

export interface GameState {
  gameState: GameStateType;
  currentPlayer: PlayerType;
  moves: number;
  // history: 
}

export enum GameActionTypes {
  NEW_GAME = 'NEW_GAME',
  CLOSE_GAME = 'CLOSE_GAME',
  MOVE = 'MOVE',
}

export interface NewGameAction {
  type: GameActionTypes.NEW_GAME;
}
export interface CloseGameAction {
  type: GameActionTypes.CLOSE_GAME;
}
export interface MoveAction {
  type: GameActionTypes.MOVE;
  payload: number;
}

export type GameAction = NewGameAction | CloseGameAction | MoveAction;