import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components/native';
import { SafeProvider } from 'styles';
import { light } from 'styles/theme';
import './reactotron';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <SafeProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeProvider>
    </ThemeProvider>
  );
};

export default App;
