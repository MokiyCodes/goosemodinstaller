#!/bin/bash
# Runs after ./buildDeb.sh
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

LOGFILE=$PWD/postbuild.log
PROJDIR=$PWD/../..
echo "START POSTBUILD" > $LOGFILE
echo "- POSTBUILD"
echo "-> MOVING .deb TO $PROJDIR/dist"
echo "-> MOVING .deb TO $PROJDIR/dist" >> $LOGFILE
mv "./installer.deb" "$PROJDIR/dist/Goosemod Installer-Linux.deb"