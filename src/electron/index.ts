/*
  Runs within the electron app - handles 99% of what it does
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

// const lib = document['lib'];
// const installers = lib.Installers;

// import * as electron from 'electron';
const electron = require("electron");

let toggle: (Plat: string) => void;
if (toggle) void 0; // silence warn

const order = ["terms", "discordList", "installing", "installcomplete"];

const next = () => {
  const hide = document.getElementById(order.shift());
  const show = document.getElementById(order[0]);
  hide.classList.add("hidden");
  hide.classList.remove("shown");

  show.classList.add("shown");
  show.classList.remove("hidden");
  show.classList.remove("right");

  if (order[0] == "installing") {
    electron.ipcRenderer.on("next", () => next());
    electron.ipcRenderer.send("InstallOnPlatforms", ActiveInstallers);
  }

  if (order[1] == "installcomplete" || !order[1]) {
    document.getElementsByClassName("buttons")[0]["style"].bottom = "-100vw";
  }
};
if (next) void 0; // silence warn

let ActiveInstallers = {
  Stable: false,
  PTB: false,
  Canary: false,
  Dev: false,
};

document["toggle"] = toggle = (plat: string) => {
  ActiveInstallers[plat] = !ActiveInstallers[plat];
  document.getElementById(plat).classList.toggle("active");
};

const Discords = electron.ipcRenderer.sendSync("getDiscords");
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add(
    `platform-${process.platform}`,
    process.platform == "win32"
      ? "win"
      : process.platform == "linux"
      ? "linux"
      : process.platform == "darwin"
      ? "mac"
      : "other"
  );

  for (const discord in Discords) {
    if (Object.prototype.hasOwnProperty.call(Discords, discord)) {
      const exists = Discords[discord];
      if (exists) {
        document
          .getElementById(discord)
          .getElementsByClassName("isInstalled")[0].innerHTML = "Detected";

        document.getElementById(discord).onclick = () => toggle(discord);

        // toggle(discord);
      } else {
        document.getElementById(discord).onclick = () => {};
      }
    }
  }
  document.getElementById("next").onclick = () => next();
});
