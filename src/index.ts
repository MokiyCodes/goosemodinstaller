/*
  Starts the Electron App
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

import lib from "./lib/index";
import * as electron from "electron";
import * as path from "path";
import * as fs from "fs";

(async () => {
  const { app, BrowserWindow } = electron;
  await app.whenReady();
  const win = new BrowserWindow({
    darkTheme: true,
    autoHideMenuBar: true,
    frame: false,
    fullscreenable: false,
    hasShadow: true,
    transparent: true,
    icon: path.resolve("../assets/icon.ico"),
    width: 550,
    height: 350,
    resizable: false,
    maximizable: false,
    // backgroundColor: '#0c0d10',
    title: "Unofficial GooseMod Installer by 0J3",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      accessibleTitle: "Goose Mod Installer",
      backgroundThrottling: true,
      scrollBounce: false,
      webviewTag: false,
      preload: path.resolve("./preload.js"),
    },
  });
  electron.ipcMain.on("InstallOnPlatforms", (event, plat: string[]) => {
    for (const pl in plat) {
      if (Object.prototype.hasOwnProperty.call(plat, pl)) {
        const element = plat[pl];
        if (element) {
          console.log("Installing for", pl);

          lib.Installers[pl].Install();
        }
      }
    }
    // ensure anim is done
    setTimeout(() => event.reply("next", "a"), 1000);
  });
  electron.ipcMain.on("getDiscords", (event) => {
    event.returnValue = {
      Stable: fs.existsSync(lib.Clients.stable.path[process.platform]),
      PTB: fs.existsSync(lib.Clients.ptb.path[process.platform]),
      Canary: fs.existsSync(lib.Clients.canary.path[process.platform]),
      Dev: fs.existsSync(lib.Clients.dev.path[process.platform]),
    };
  });
  electron.ipcMain.on("min", () => {
    win.minimize();
  });
  win.webContents.setWindowOpenHandler((details) => {
    // e.preventDefault();
    require("electron").shell.openExternal(details.url);
    return {
      action: "deny",
    };
  });
  win.loadFile("./src/electron/index.html");
})();
