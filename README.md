# NEXORA

## Dev Guide

Prefer yarn over npm! use `yarn add ...` instead of `npm i ... --save` to add new packages
### Dev Env

```
node: v22.16.0
npm: 10.9.2
IDE: VS Code
```

### Code Style

Styling rules are defined in `.prettierrc.js`
At the time you commit the code, the linter will run and output any errors. Please fix all before committing. But you can setup VS Code to lint dynamically.

#### Setup VS Code for dynamic linting
1. First, install the ESLint command-line tool. `npm install -g eslint`
2. Then, install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in VS Code 

### Project Setup
1. [Setup react native development environment in native mode](https://reactnative.dev/docs/environment-setup) (Not expo mode)
2. `git clone ...`
3. `cd nexora-app`
4. `yarn`


### Running on iOS Simulator/Device (dev version)

1. `cd ios`
2. open `nexora.xcworkspace` from Xcode
3. make sure you have dev certificate from your Apple Dev Team in your keychain (unless automatic signing)
4. select connected iOS device or simulator
5. run


### Running on Android (dev version)

1. connect device or open emulator
2. `yarn android`

### Build and install on Android Device (release version)

 1. `yarn android:install`

There are more npm (yarn) scripts writtern in package.json for shake, reload, start packager... feel free to use them and add more :D 

### Make a new release
TODO using  [react-native-version](https://github.com/stovmascript/react-native-version)

`npm version major.minor.patch` will do following (ex: npm version 1.0.3)
1. upgrade npm version, commit and tag version change
2. upgrade android, ios versions and ammend to above commit
3. build android release version and install in the device
