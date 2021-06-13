import lib from './lib/index';
import * as electron from 'electron';
import * as path from 'path';
import * as fs from 'fs';

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
    icon: path.resolve('../assets/icon.ico'),
    width: 550,
    height: 350,
    resizable: false,
    maximizable: false,
    // backgroundColor: '#0c0d10',
    title: 'Unofficial GooseMod Installer by 0J3',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      accessibleTitle: 'Goose Mod Installer',
      backgroundThrottling: true,
      scrollBounce: false,
      webviewTag: false,
      preload: path.resolve('./preload.js'),
    },
  });
  electron.ipcMain.on('InstallOnPlatforms', (event, plat: string[]) => {
    for (const pl in plat) {
      if (Object.prototype.hasOwnProperty.call(plat, pl)) {
        const element = plat[pl];
        if (element) {
          console.log('Installing for', pl);

          lib.Installers[pl].Install();
        }
      }
    }
    // ensure anim is done
    setTimeout(() => event.reply('next', 'a'), 1000);
  });
  electron.ipcMain.on('getDiscords', event => {
    event.returnValue = {
      Stable: fs.existsSync(lib.Clients.stable.path[process.platform]),
      PTB: fs.existsSync(lib.Clients.ptb.path[process.platform]),
      Canary: fs.existsSync(lib.Clients.canary.path[process.platform]),
      Dev: fs.existsSync(lib.Clients.dev.path[process.platform]),
    };
  });
  electron.ipcMain.on('min', () => {
    win.minimize();
  });
  win.webContents.setWindowOpenHandler(details => {
    // e.preventDefault();
    require('electron').shell.openExternal(details.url);
    return {
      action: 'deny',
    };
  });
  win.loadFile('./src/electron/index.html');
})();
