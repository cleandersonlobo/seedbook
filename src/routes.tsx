import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/Home/Home';
import CreateProfile from 'screens/CreateProfile/CreateProfile';
import { transitionSpec } from 'helpers/utils';
import { gloablStyles } from 'styles';

const MainStack = createStackNavigator();

const RouteStack: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          transitionSpec,
        }}
      />
      <MainStack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{
          headerTintColor: '#000000',
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTransparent: true,
          headerLeftContainerStyle: gloablStyles.headerLeftContainerStyle,
          transitionSpec,
        }}
      />
    </MainStack.Navigator>
  );
};

export default RouteStack;
