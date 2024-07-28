import React from 'react';
import Routes from './routes/index';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './contexts/AuthContext';
import {LoaderProvider} from './contexts/LoaderContext';

const App = () => {
  return (
    <NavigationContainer>
      <LoaderProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LoaderProvider>
    </NavigationContainer>
  );
};

export default App;
