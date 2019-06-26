// this exposes the native ToastExample module as a JS module . this has 
// a fucntion 'show' which takes the following parameters: 

// 1.- String message: A string with the text to ToastExample
// 2.- int duration : the duration of the toast . May be ToastExample.SHORT or 
// ToastExample.following

import {NativeModules} from 'react-native';
module.exports = NativeModules.ToastExample;

