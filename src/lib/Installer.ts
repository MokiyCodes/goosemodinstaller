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
