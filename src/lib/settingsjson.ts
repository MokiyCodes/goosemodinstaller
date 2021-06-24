/*
  Actual settings.json Interface and keys to merge with it
  Copyright (C) 2021  0J3

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as published
 by the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
  UPDATE_ENDPOINT: "https://updates.goosemod.com/goosemod",
  NEW_UPDATE_ENDPOINT: "https://updates.goosemod.com/goosemod/",
};

export default settingsJSON;
