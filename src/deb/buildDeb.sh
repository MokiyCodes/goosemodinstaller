#!/bin/bash
# Builds the .deb file
# Depends on:
#  - yarnpkg (npm)
#  - nodejs
#  - all dependencies of the electron version installed (via yarn)

./prebuild.sh

echo "- BUILD"
dpkg-deb --build . "installer.deb"

./postbuild.sh