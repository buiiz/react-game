export type PlayerType = 'X' | 'O' | 'draw' | ''
export type GameStateType = Array<PlayerType>
export type HistoryItemType = {
  date: Date;
  winner: PlayerType
  moves: number;
}
export type HistoryType = Array<HistoryItemType>

export interface GameState {
  gameState: GameStateType;
  currentPlayer: PlayerType;
  moves: number;
  history: HistoryType;
}

export enum GameActionTypes {
  NEW_GAME = 'NEW_GAME',
  CLOSE_GAME = 'CLOSE_GAME',
  MOVE = 'MOVE',
  ADD_HISTORY_RECORD = 'ADD_HISTORY_RECORD',
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
export interface AddHistoryRecordAction {
  type: GameActionTypes.ADD_HISTORY_RECORD;
  payload: HistoryItemType;
}

export type GameAction = NewGameAction | CloseGameAction | MoveAction | AddHistoryRecordAction;