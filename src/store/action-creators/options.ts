import { Dispatch } from "redux";
import {
  ToggleSoundAction,
  ToggleMusicAction,
  ToggleFullscreenAction,
  ToggleThemeAction,
  OptionsActionTypes
} from "../../types/options";

export const toggleSound = (value?: boolean) => (dispatch: Dispatch<ToggleSoundAction>) => {
  return dispatch({ type: OptionsActionTypes.TOGGLE_SOUND, payload: value });
}

export const toggleMusic = (value?: boolean) => (dispatch: Dispatch<ToggleMusicAction>) => {
  return dispatch({ type: OptionsActionTypes.TOGGLE_MUSIC, payload: value });
}

export const toggleFullscreen = (value?: boolean) => (dispatch: Dispatch<ToggleFullscreenAction>) => {
  return dispatch({ type: OptionsActionTypes.TOGGLE_FULLSCREEN, payload: value });
}

export const toggleTheme = (value?: boolean) => (dispatch: Dispatch<ToggleThemeAction>) => {
  return dispatch({ type: OptionsActionTypes.TOGGLE_THEME, payload: value });
}
