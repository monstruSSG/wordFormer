import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { name as appName } from './app.json';
import Router from './src/screens/Router';
import configureStore from './src/store/configureStore';

const store = configureStore();

const WordsGame = () => (
    <Provider store={store}>    
        <Router />
    </Provider>
);

AppRegistry.registerComponent(appName, () => WordsGame);
