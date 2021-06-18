#!/bin/bash
# Runs after ./buildDeb.sh

LOGFILE=$PWD/postbuild.log
PROJDIR=$PWD/../..
echo "START POSTBUILD" > $LOGFILE
echo "- POSTBUILD"
echo "-> MOVING .deb TO $PROJDIR/dist"
echo "-> MOVING .deb TO $PROJDIR/dist" >> $LOGFILE
mv "./installer.deb" "$PROJDIR/dist/Goosemod Installer-Linux.deb"