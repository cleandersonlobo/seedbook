import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from 'screens/Menu/Menu';
import CreateProfile from 'screens/CreateProfile/CreateProfile';
import Profile from 'screens/Profile/Profile';
import Home from 'screens/Home/Home';
import BookStore from 'screens/BookStore/BookStore';
import MyCollections from 'screens/MyCollections/MyCollections';
import WriteBook from 'screens/WriteBook/WriteBook';
import { transitionSpec } from 'helpers/utils';
import Storage from 'screens/Storage/Storage';

const MainStack = createStackNavigator();

const RouteStack: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Menu">
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
          headerShown: false,
          transitionSpec,
        }}
      />
      <MainStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
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
          animationEnabled: true,
          headerShown: false,
          transitionSpec,
        }}
      />
      <MainStack.Screen
        name="Editora"
        component={WriteBook}
        options={{
          headerShown: false,
          transitionSpec,
        }}
      />
      <MainStack.Screen
        name="Loja"
        component={Storage}
        options={{
          headerShown: false,
          transitionSpec,
        }}
      />
    </MainStack.Navigator>
  );
};

export default RouteStack;
