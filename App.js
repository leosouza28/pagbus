/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import RootStack from './src/RootStack';

export default class App extends Component{
  render() {
    return (
      <Provider store={createStore(reducers)}>    
          <RootStack/>
      </Provider>
    );
  }
}