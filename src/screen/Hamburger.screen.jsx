/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Touchable, TouchableWithoutFeedback} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Hamburgerscreen({navigation}) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('users')
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000);
  }
  return (
    <View style={{padding: 20}}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack();
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            position: 'absolute',
            padding: 20,
          }}>
          <Icon name="angle-left" size={30} color="black" />
          <Text style={{color: 'black'}}>Back</Text>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          justifyContent: 'center',
          height: '100%',
          flexDirection: 'column',
        }}>
        <View style={{gap: 40, width: '100%', marginTop: 25}}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Button
              style={{
                backgroundColor: '#FFEAD2',
                borderColor: '#fdc6ae',
                borderWidth: 2,
              }}
              labelStyle={{color: 'black', padding: 8, fontSize: 18}}>
              Login
            </Button>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Button
              style={{
                backgroundColor: '#FFEAD2',
                borderColor: '#fdc6ae',
                borderWidth: 2,
              }}
              labelStyle={{color: 'black', padding: 8, fontSize: 18}}>
              Register
            </Button>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Button
              style={{
                backgroundColor: '#FFEAD2',
                borderColor: '#fdc6ae',
                borderWidth: 2,
              }}
              labelStyle={{color: 'black', padding: 8, fontSize: 18}}>
              Profile
            </Button>
          </TouchableWithoutFeedback>
            <Button
            onPress={() => handleLogout()}
              style={{
                backgroundColor: '#FFEAD2',
                borderColor: '#fdc6ae',
                borderWidth: 2,
              }}
              labelStyle={{color: 'black', padding: 8, fontSize: 18}}>
              Logout
            </Button>
        </View>
      </View>
    </View>
  );
}
