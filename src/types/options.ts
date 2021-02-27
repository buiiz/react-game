export type ThemeType = 'light' | 'dark';

export interface OptionsState {
  isSound: boolean;
  isMusic: boolean;
  isFullscreen: boolean,
  isDarkTheme: boolean,
}

export enum OptionsActionTypes {
  TOGGLE_SOUND = 'TOGGLE_SOUND',
  TOGGLE_MUSIC = 'TOGGLE_MUSIC',
  TOGGLE_FULLSCREEN = 'TOGGLE_FULLSCREEN',
  TOGGLE_THEME = 'TOGGLE_THEME',
}

export interface ToggleSoundAction {
  type: OptionsActionTypes.TOGGLE_SOUND;
  payload?: boolean;
}
export interface ToggleMusicAction {
  type: OptionsActionTypes.TOGGLE_MUSIC;
  payload?: boolean;
}
export interface ToggleFullscreenAction {
  type: OptionsActionTypes.TOGGLE_FULLSCREEN;
  payload?: boolean;
}
export interface ToggleThemeAction {
  type: OptionsActionTypes.TOGGLE_THEME;
  payload?: boolean;
}

export type OptionsAction = ToggleSoundAction | ToggleMusicAction | ToggleFullscreenAction | ToggleThemeAction;
