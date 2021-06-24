#!/bin/bash
# Builds the files necesary for the .deb file
# Copyright (C) 2021  0J3

# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published
# by the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.

# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

# Depends on:
#  - yarnpkg (npm)
#  - nodejs
#  - all dependencies of the electron version installed (via yarn)

DEB_DIR=$PWD
echo "START PREBUILD" > $DEB_DIR/prebuild.log
echo "- PREBUILD"
cd ../..
echo "-> Building Project (using yarn compile)"
echo "-> Building Project (using yarn compile)">>$DEB_DIR/prebuild.log
yarn compile>>$DEB_DIR/prebuild.log

echo "-> Building Postinstall Script (using yarn deb_postinstall)"
echo "-> Building Postinstall Script (using yarn deb_postinstall)">>$DEB_DIR/prebuild.log
yarn deb_postinstall>>$DEB_DIR/prebuild.log

echo "-> Building Preremove Script (using yarn deb_prerm)"
echo "-> Building Preremove Script (using yarn deb_prerm)">>$DEB_DIR/prebuild.log
yarn deb_prerm>>$DEB_DIR/prebuild.log

echo "-> Changing Permission Nodes to 755"
echo "-> Changing Permission Nodes to 755">>$DEB_DIR/prebuild.log
chmod 755 ./postinst ./prerm>>$DEB_DIR/prebuild.log

echo "-> Moving Postinstall and Preremove scripts to $DEB_DIR/DEBIAN"
echo "-> Moving Postinstall and Preremove scripts to $DEB_DIR/DEBIAN">>$DEB_DIR/prebuild.log
mv ./postinst $DEB_DIR/DEBIAN>>$DEB_DIR/prebuild.log
mv ./prerm $DEB_DIR/DEBIAN>>$DEB_DIR/prebuild.log
