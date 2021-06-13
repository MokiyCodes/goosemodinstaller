import { Client } from './clients';
import convert from './getNewJSON';
import * as fs from 'fs';
export interface Installer {
  Install: () => void;
  Platform: Client;
}
export const InstallerCreator: (client: Client) => Installer = (
  client: Client
) => {
  return {
    Platform: client,
    Install: () => {
      const path: string | undefined = client.path[process.platform];
      if (!path) throw new Error('Invalid Platform');
      fs.writeFileSync(
        path,
        JSON.stringify(
          convert(JSON.parse(fs.readFileSync(path).toString())),
          null,
          2
        )
      );
      console.log('Wrote to', path);
    },
  };
};
export default InstallerCreator;
