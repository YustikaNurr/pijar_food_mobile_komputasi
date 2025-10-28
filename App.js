/* eslint-disable prettier/prettier */
import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/store';

import {PersistGate} from 'redux-persist/integration/react';

import Main from './src/App';

export default function App() {
  console.log(`store app js${store}`)
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistore}>
        <Main />
      </PersistGate>
    </Provider>
  );
}