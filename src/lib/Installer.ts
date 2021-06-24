/*
  Actual Installer code to modify settings.json
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
import { Client } from "./clients";
import convert, { unconvert } from "./getNewJSON";
import * as fs from "fs";
export interface Installer {
  Install: () => void;
  Uninstall: () => void;
  Platform: Client;
}
export const InstallerCreator: (client: Client) => Installer = (
  client: Client
) => {
  return {
    Platform: client,
    Install: () => {
      const path: string | undefined = client.path[process.platform];
      if (typeof path == "undefined")
        throw new Error(
          "Invalid Platform " +
            process.platform +
            " for client " +
            client.name +
            " (" +
            path +
            " is undefined)"
        );
      if (fs.existsSync(path)) {
        fs.writeFileSync(
          path,
          JSON.stringify(
            convert(JSON.parse(fs.readFileSync(path).toString())),
            null,
            2
          )
        );
        console.log("Wrote to", path);
      } else {
        console.warn(
          `⚠ Cannot find ${client.name}'s Install Directory (${path}) - Skipping
🛈 If installing from .deb, this will result in an installation without goosemod.`
        );
      }
    },
    Uninstall: () => {
      const path: string | undefined = client.path[process.platform];
      if (!path)
        throw new Error(
          "Invalid Platform " + process.platform + " for client " + client.name
        );
      if (fs.existsSync(path)) {
        fs.writeFileSync(
          path,
          JSON.stringify(
            unconvert(JSON.parse(fs.readFileSync(path).toString())),
            null,
            2
          )
        );
        console.log("Wrote to", path);
      } else {
        console.warn(
          "Cannot find " + client.name + "'s Install Directory - Skipping"
        );
      }
    },
  };
};
export default InstallerCreator;
