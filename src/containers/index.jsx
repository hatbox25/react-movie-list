import React from 'react';
import { Provider } from 'react-redux';

import NavigationProvider from '../navigation/navigation';
import { store } from '../redux/store';

const App = () => (
  <Provider store={store}>
    <NavigationProvider />
  </Provider>
);

export default App;
