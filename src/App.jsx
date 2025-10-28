/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screen

import HomeScreen from './screen/home.screen';
import DetailRecipeScreen from './screen/DetailRecipe.Screen';
import Hamburgerscreen from './screen/Hamburger.screen';
import Loginscreen from './screen/Login.screen';
import Registerscreen from './screen/Register.screen';
import Profilescreen from './screen/Profile.screen';
import KategoriScreen from './screen/Kategori.Screen';
import Upcoming from './screen/upcoming.screen';
import EditProfileScreen from './screen/EditProfile.Screen';

import { store } from './store';
import { Provider } from 'react-redux'

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <PaperProvider>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Hamburger"
            component={Hamburgerscreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail_Recipe"
            component={DetailRecipeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profilescreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Loginscreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Registerscreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Kategori"
            component={KategoriScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Upcoming"
            component={Upcoming}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        </Provider>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
