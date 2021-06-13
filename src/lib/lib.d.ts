import { Clients } from './clients';
import { Installer } from './Installer';

export interface Installers {
  Stable: Installer;
  PTB?: Installer;
  Canary?: Installer;
  Dev?: Installer;
}

export default interface Lib {
  Clients: Clients;
  Installers: Installers;
}
