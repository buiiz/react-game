import { OptionsAction, OptionsActionTypes, OptionsState } from "../../types/options";
import * as localStorage from "../../utils/localStorage";

const state = localStorage.get('options')

const initialState: OptionsState = {
  isSound: state?.isSound ?? true,
  isMusic: state?.isMusic ?? false,
  isFullscreen: false,
}

export const optionsReducer = (state = initialState, action: OptionsAction): OptionsState => {
  switch (action.type) {
    case OptionsActionTypes.TOGGLE_SOUND:
      return { ...state, isSound: (action.payload !== undefined) ? action.payload : !state.isSound };
    case OptionsActionTypes.TOGGLE_MUSIC:
      return { ...state, isMusic: (action.payload !== undefined) ? action.payload : !state.isMusic };
    case OptionsActionTypes.TOGGLE_FULLSCREEN:
      return { ...state, isFullscreen: (action.payload !== undefined) ? action.payload : !state.isFullscreen };
    default:
      return state;
  }
}
