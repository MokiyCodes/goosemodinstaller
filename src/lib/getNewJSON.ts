import { SettingsJSON, settingsJSON } from './settingsjson';
export const convert: (input: SettingsJSON) => SettingsJSON = (
  input: SettingsJSON
) => {
  return {
    ...input,
    ...settingsJSON,
  };
};
export default convert;
