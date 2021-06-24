// POSTINSTALL SCRIPT FOR .DEB
// SEE src/deb/DEBIAN/README.md FOR INFORMATION
// COPYRIGHT (c) 2021 0J3.
// LICENSED UNDER THE AGPL-3.0-OR-LATER
/*
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
const { lib } = require("./bin/lib/index");
const { Installers } = lib;

Installers.Stable.Install();

console.log(`
#############################################
#  GOOSEMOD INSTALLER                  _  x #
#############################################
# You will need to close your discord       #
# client (from the tray) and then open it   #
# again, to finish installing goosemod!     #
# - 0J3                                     #
# P.S. Thank you for using GooseMod         #
#############################################`);
