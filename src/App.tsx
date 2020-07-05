import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { SafeProvider } from 'styles';
import { light } from 'styles/theme';
import './reactotron';
import { Loading } from 'components';

const Routes = React.lazy(() => import('routes'));
const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <StatusBar barStyle="dark-content" />
      <React.Suspense fallback={<Loading />}>
        <NavigationContainer>
          <SafeProvider>
            <Routes />
          </SafeProvider>
        </NavigationContainer>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;
