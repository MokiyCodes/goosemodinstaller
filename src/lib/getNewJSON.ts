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
