import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from 'screens/Menu/Menu';
import CreateProfile from 'screens/CreateProfile/CreateProfile';
import Profile from 'screens/Profile/Profile';
import Home from 'screens/Home/Home';
import BookStore from 'screens/BookStore/BookStore';
import MyCollections from 'screens/MyCollections/MyCollections';
import { transitionSpec } from 'helpers/utils';
import { gloablStyles } from 'styles';
import BtnBack from './components/BtnBack/BtnBack';

const MainStack = createStackNavigator();

const RouteStack: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Minha coleção">
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
          headerBackImage: BtnBack,
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
          headerBackImage: BtnBack,
          headerTintColor: '#000000',
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTransparent: true,
          headerLeftContainerStyle: gloablStyles.headerLeftContainerStyle,
          transitionSpec,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          transitionSpec,
        }}
      />
      <MainStack.Screen
        name="Livraria"
        component={BookStore}
        options={{
          headerShown: false,
          transitionSpec,
        }}
      />
      <MainStack.Screen
        name="Minha coleção"
        component={MyCollections}
        options={{
          headerShown: false,
          transitionSpec,
        }}
      />
    </MainStack.Navigator>
  );
};

export default RouteStack;
