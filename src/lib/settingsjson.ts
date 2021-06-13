export interface WindowBounds {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface SettingsJSON {
  BACKGROUND_COLOR?: string;
  IS_MAXIMIZED?: string;
  IS_MINIMIZED?: string;
  WINDOW_BOUNDS?: WindowBounds;
  UPDATE_ENDPOINT?: string;
  NEW_UPDATE_ENDPOINT?: string;
}

export const settingsJSON: SettingsJSON = {
  UPDATE_ENDPOINT: 'https://updates.goosemod.com/goosemod',
  NEW_UPDATE_ENDPOINT: 'https://updates.goosemod.com/goosemod/',
};

export default settingsJSON;
