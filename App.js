/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import Routes from './src/Routes';

export default class App extends Component{
  render() {
    return (
      <Provider store={createStore(reducers)}>    
          <Routes/>
      </Provider>
    );
  }
}