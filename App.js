/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NativeModules, Alert } from 'react-native';

import FingerPrint from './src/components/FingerPrint';

const connectionStatusModule = NativeModules.ConnectionStatusModule;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  // state = { alert: ':D'}
  state = { networkName: null, isConnected: false } // < — — this two new states 

  componentDidMount() {
    this.getNetworkState();
    // setTimeout(
    //   () => connectionStatusModule.checkConnectionStatus(this.getString),
    //   3000
    // )
  }

  getNetworkState = () => { // < — — autocall this function every 5 seconds
    connectionStatusModule.checkConnectionStatus(this.getInfo)
    setTimeout(() =>  this.getNetworkState(), 3000)
  }

  getInfo = ( networkName, isConnected) => this.setState({ networkName, isConnected }); // < — — now getString is getInfo, that receive networkName and isConnected 
  // getString = text => this.setState({ alert: text });
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         {"Bienvenido a Native Modules!\nComprobando estado de red WIFI…"} 
        </Text>
        <Text style={styles.instructions}>
         { this.state.networkName }
        </Text>
        <Text style={styles.instructions}>
        { `STATUS: ${this.state.isConnected ? 'Conectado!' : 'Desconectado!'}` }  </Text>
      </View>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      // </Text>
      //   <Text style={styles.instructions}>
      //     {this.state.alert}
      // </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});