
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Router from './router'



const App = () => {
  return (
    <Provider store={ store }>
        <Router />
    </Provider>
  );
};

export default App;
