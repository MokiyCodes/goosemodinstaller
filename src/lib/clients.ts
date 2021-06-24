/*
  List of clients that the library supports
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

import { existsSync, readdirSync } from "fs";

export interface Client {
  name: string;
  path: {
    win32: string;
    linux?: string;
  };
}
export interface Clients {
  stable: Client;
  ptb: Client;
  canary: Client;
  dev: Client;
}

const getLinux = () => {
  if (process.env.HOME) {
    const linuxVariants = [process.env.HOME + "/.config/discord/settings.json"];

    if (existsSync("/home/")) {
      readdirSync("/home/").forEach((dir) => {
        linuxVariants.push(`/home/${dir}/.config/discord/settings.json`);
      });
    }

    let linuxStablePath: string = "";

    linuxVariants.forEach((v: string) => {
      linuxStablePath = existsSync(v) ? v : linuxStablePath;
    });

    return linuxStablePath;
  }
  return process.env.HOME + "/.config/discord/settings.json";
};

export const clients: Clients = {
  stable: {
    name: "Stable",
    path: {
      win32: process.env.APPDATA + "\\discord\\settings.json",
      linux: getLinux(),
    },
  },
  ptb: {
    name: "PTB",
    path: {
      win32: process.env.APPDATA + "\\discordptb\\settings.json",
      linux: `unknown`,
    },
  },
  canary: {
    name: "Canary",
    path: {
      win32: process.env.APPDATA + "\\discordcanary\\settings.json",
      linux: `unknown`,
    },
  },
  dev: {
    name: "Dev",
    path: {
      win32: process.env.APPDATA + "\\discorddevelopment\\settings.json",
      linux: `unknown`,
    },
  },
};
export default clients;
