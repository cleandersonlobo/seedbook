import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components/native';
import { light } from './styles/theme';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={light}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
