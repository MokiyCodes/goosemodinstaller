/*
  Main lib file
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
import clients from "./clients";
import InstallerCreator from "./Installer";
import Lib from "./lib";

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
