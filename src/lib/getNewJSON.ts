/*
  Converts a SettingsJSON to a Goosemod SettingsJSON
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
import { SettingsJSON, settingsJSON } from "./settingsjson";
export const convert: (input: SettingsJSON) => SettingsJSON = (
  input: SettingsJSON
) => {
  return {
    ...input,
    ...settingsJSON,
  };
};
export const unconvert: (input: SettingsJSON) => SettingsJSON = (
  input: SettingsJSON
) => {
  delete input.NEW_UPDATE_ENDPOINT;
  delete input.UPDATE_ENDPOINT;

  return input;
};
export default convert;
