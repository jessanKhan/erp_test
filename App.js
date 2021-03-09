/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import RootNavigator from './src/routes/rootnavigator';
import {PersistGate} from 'redux-persist/es/integration/react';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
