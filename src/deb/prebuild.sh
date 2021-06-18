#!/bin/bash
# Builds the files necesary for the .deb file
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
