ReactVRTest
===========

## Installation

1. From the project root run the following commands:

```
npm install
npm start
```

2.  Browse to http://localhost:8081/vr/?hotreload=1&devtools=1 to view the project. Note that hot reloading and devtools
    connection will be enabled. Devtools only works if running the React Packager and React Inspector inside
    [Atom](http://atom.io) editor.

## Developers

### Native CLI

*   You can run the packager using `npm start` to start the React Packager. Automatically start the built-in web server
    that can be accessed at http://localhost:8081/vr/ or http://YOUR_IP_ADDRESS:8081/vr/ if you wish to view it on your
    mobile device.

### Debug on Samsung GearVR

*   Browse to http://YOUR_IP_ADDRESS:8081/vr/ in Chrome or Firefox on your mobile device and tap the *View in VR* button.
    Insert your phone into the GearVR headset when prompted.

*   Alternately browse to *Settings -> Applications -> Application Manager -> GearVR Service -> Storage -> Manage Storage*
    and tap *VR Service Version* several times until you are prompted to enable developer mode. From then on you can
    return to this screen and toggle *Developer Mode* which will set the device into a debug mode which makes GearVR
    applications think the phone is running inside the headset, allowing the phone to remain plugged in to charge.

### Using Atom

### Installing Atom

1.  [Download Atom](http://atom.io)

2.  Install `nuclide` package by going to *Atom -> Preferences... -> Install* and search for `nuclide`. Click *Install* to add.

### Atom Usage

*   You can run the packager by launching the *Nuclide React Native: Start Packager* command from the Atom command palette.

*   You can access the command palette by pressing Command+Shift+P

## Licence

This project is licenced under MIT. See `LICENCE` for details. All 3D models, textures, materials and artwork used in this project are 
excluded from this licence and are property of their respective owners.