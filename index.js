/**
 * @format
 */
//redux start
// import {Provider} from 'react-redux';
// import store from './src/redux/store';
// import {PersistGate} from 'redux-persist/integration/react';
//redux end
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
