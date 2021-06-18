# goosemodinstaller

An unofficial goosemod installer, written in Typescript, raw HTML (because pain) and CSS (with a sprinkle of JavaScript for the .deb version, although that just calls functions in the TS API).

## Downloads

[Windows](https://github.com/0J3/goosemodinstaller/releases/latest/download/Goosemod.Installer-Windows.exe)<br/>
[Linux AppImage](https://github.com/0J3/goosemodinstaller/releases/latest/download/Goosemod.Installer-Linux.AppImage)<br/>
[Linux Deb](https://github.com/0J3/goosemodinstaller/releases/latest/download/Goosemod.Installer-Linux.deb)<br/>

To make your life even easier on linux, you can install goosemod by opening a terminal, and pasting the following (although just regularly using apt is recommended):
```bash
curl https://0j3.github.io/goosemodinstaller/apt.sh --silent | sudo bash
```

## Screenshots

![image](https://user-images.githubusercontent.com/67464646/121822896-f9579680-cca1-11eb-851e-a03e6a8afe1e.png)
![image](https://user-images.githubusercontent.com/67464646/121822912-0f655700-cca2-11eb-9316-91ad1cbc0204.png)
![image](https://user-images.githubusercontent.com/67464646/121822899-ff4d7780-cca1-11eb-8d1a-e3f12e051a7c.png)

## As a Library
Yes, you can use this as a library (if you really really want to)

### Notices
1. This project has electron in it's dependencies, so if you aren't using electron, prepare for an additional 70mb
2. This project's api isn't exactly like the easiest to work with
3. The typescript declaration files would be better documentation than the following

### Installing

```bash
git submodule add https://github.com/0J3/goosemodinstaller.git
cd goosemodinstaller
yarn
yarn compile
cd ..
```

### Importing

Typescript:
```ts
import lib from "./goosemodinstaller/src/lib/index";
```
Javascript:
```js
const {lib} = require("./goosemodinstaller/bin/lib/index");
```

### Installers
```ts
const installer = lib.Installers[PlatformName]
```
where platformname is one of:
- Stable
- PTB
- Canary
- Dev

### Installing
```ts
installer.Install();
```

### Uninstalling
```ts
installer.Uninstall();
```
