# React Native Redux Navigation with Side Menu & Authentication flow enabled

## A starter boilerplate code for a mobile app using React Native, Redux, Authentication, Side-Menu and React Navigation. 
## Redux and react-navigation configurations are wired up, so the developer can simply install it globally or download the templates folder from github repo to local project directory.

## (also supporting RN 0.57+)
## Demo
<img src="https://github.com/mrebb/react-native-redux-sidemenu-navigator-cli/blob/master/templates/react-native-template/assets/demo.gif?raw=true" width="360">

## Requirements
- [Node](https://nodejs.org) `6.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

## Stack / Libraries
- [React Native](https://facebook.github.io/react-native/) `0.57.3` for building native apps using react
- [Redux](https://redux.js.org/) `^4.0.0` a predictable state container for Javascript apps
- [React-Redux](https://github.com/reduxjs/react-redux) `^5.0.7` Official React bindings for redux
- [React Navigation](https://reactnavigation.org/) `^2.18.0` a router based on new React Native Navigation API
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support


## Get Started


#### 1. Installation using CLI

For installing CLI app through npm
```sh
$ npm install -g react-native-redux-sidemenu-navigator-cli
```
For installing CLI app through yarn
```sh
$ yarn global add react-native-redux-sidemenu-navigator-cli
```
a) For Existing projects created using react-native-cli , run following commands
```sh
$ cd <your project root directory>
$ react-native-redux
    ? What project template would you like to generate? (Use arrow keys)
    ❯ react-native-template (Select this with 'enter' key)
    ? Project name: <Enter project/folder name you wish the template files to be copied into>
$ cd <folder name> to see the boiler plate code and copy the files back into your project root directory
$ delete old package.json and app.js or merge dependecies of package.json from existing project and boiler plate code
$ npm i 
``` 
b) To start new project using boiler plate code, run following commands
```sh
$ npm i -g react-native
$ react-native init demo
$ cd demo
$ rm -rf app.js
$ rm -rf package.json
$ react-native-redux
    ? What project template would you like to generate? (Use arrow keys)
    ❯ react-native-template (Select this with 'enter' key)
    ? Project name: <Enter project/folder name you wish the template files to be copied into>
$ cd <folder name> to see the boiler plate code and copy the files back into your project root directory
$ cd .. <to go back to root folder>
$ update `name` field inside package.json to reflect desired <project name>
$ npm install 
``` 
#### 2. Manual process: On the command prompt run the following commands and copy the boiler-plate code into your project directory

```sh
$ git clone https://github.com/mrebb/react-native-redux-sidemenu-navigator-cli.git

$ cd templates/react-native-template

```