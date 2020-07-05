import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from 'screens/Menu/Menu';
import CreateProfile from 'screens/CreateProfile/CreateProfile';
import Profile from 'screens/Profile/Profile';
import { transitionSpec } from 'helpers/utils';
import { gloablStyles } from 'styles';

const MainStack = createStackNavigator();

const RouteStack: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Profile">
      <MainStack.Screen
        name="Menu"
        component={Menu}
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
      <MainStack.Screen
        name="Profile"
        component={Profile}
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
