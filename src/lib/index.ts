import clients from './clients';
import InstallerCreator from './Installer';
import Lib from './lib';

export const lib: Lib = {
  Clients: clients,
  Installers: {
    Stable: InstallerCreator(clients.stable),
    PTB: InstallerCreator(clients.ptb),
    Canary: InstallerCreator(clients.canary),
    Dev: InstallerCreator(clients.dev),
  },
};

export default lib;
