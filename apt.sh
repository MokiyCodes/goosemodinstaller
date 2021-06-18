# downloads goosemod and installs it via apt
# to make your life even f#cking easier than it already is

# require root
[[ $EUID -ne 0 ]] && echo "This script must be run as root." && exit 1

# CD into home
cd ~

echo "- Goosemod Apt QuickInstaller"
# download
echo "-> Downloading Goosemod's Installer"
wget https://github.com/0J3/goosemodinstaller/releases/latest/download/Goosemod.Installer-Linux.deb --quiet

# install
echo "-> Installing via apt"
apt install ./Goosemod.Installer-Linux.deb

# remove
echo "-> Removing .deb file (Cleaning Up)"
rm ./Goosemod.Installer-Linux.deb
