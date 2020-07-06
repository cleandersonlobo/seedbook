import React, { useState, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { ThemeModeContext } from 'contexts';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { SafeProvider } from 'styles';
import { light, dark } from 'styles/theme';
import './reactotron';
import { Loading } from 'components';

const Routes = React.lazy(() => import('routes'));
const App: React.FC = () => {
  const [isDark, setModeTheme] = useState(false);
  const handleOnTheme = useCallback(() => {
    setModeTheme(val => !val);
  }, []);
  return (
    <ThemeModeContext.Provider value={{ isDark, handleOnTheme }}>
      <ThemeProvider theme={isDark ? dark : light}>
        {isDark ? (
          <StatusBar barStyle="light-content" />
        ) : (
          <StatusBar barStyle="dark-content" />
        )}

        <SafeProvider>
          <NavigationContainer>
            <React.Suspense fallback={<Loading />}>
              <Routes />
            </React.Suspense>
          </NavigationContainer>
        </SafeProvider>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default App;
