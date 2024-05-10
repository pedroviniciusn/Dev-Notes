import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Add your navigation here */}
      </PersistGate>
    </Provider>
  );
};

export default App;
