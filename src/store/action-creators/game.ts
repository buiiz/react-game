
import { Dispatch } from "redux";
import {
  NewGameAction,
  GameActionTypes,
  MoveAction,
  CloseGameAction,
  AddHistoryRecordAction,
  HistoryItemType
} from "../../types/game";

export const newGame = () => (dispatch: Dispatch<NewGameAction>) => {
  return dispatch({ type: GameActionTypes.NEW_GAME });
}

export const closeGame = () => (dispatch: Dispatch<CloseGameAction>) => {
  return dispatch({ type: GameActionTypes.CLOSE_GAME });
}

export const move = (id: number) => (dispatch: Dispatch<MoveAction>) => {
  return dispatch({ type: GameActionTypes.MOVE, payload: id });
}

export const newHistoryRecord = (record: HistoryItemType) => (dispatch: Dispatch<AddHistoryRecordAction>) => {
  return dispatch({ type: GameActionTypes.ADD_HISTORY_RECORD, payload: record });
}