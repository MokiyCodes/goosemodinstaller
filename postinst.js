// POSTINSTALL SCRIPT FOR .DEB
// SEE src/deb/DEBIAN/README.md FOR INFORMATION
// COPYRIGHT (c) 2021 0J3.
// LICENSED UNDER THE AGPL-3.0-OR-LATER
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
