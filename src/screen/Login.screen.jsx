/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import {Button, Text, TextInput, Snackbar} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ElevationLevels} from 'react-native-paper/lib/typescript/src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

import user, * as userSlices from '../slices/user';
import {useDispatch} from 'react-redux';
// import {doLogin} from '../redux/actions/auth';
// import useDispatch from 'react-redux';

export default function Loginscreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [passwords, setPassword] = React.useState('');
  const [Snackbarbg, setSnackbarbg] = React.useState('');

  const [visible, setVisible] = React.useState(false);
  const [messageSnackbar, setMessageSnackbar] = React.useState('');
  const hideSnackbar = () => setVisible(false);
  const handleLogin = () => {
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
    // dispatch(doLogin(email))
      .then(async querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot);
        });
        console.log(JSON.stringify(tempData[0]?._data));

        if (tempData.length == 0) {
          setVisible(true);
          setMessageSnackbar('Email not registered');
          setSnackbarbg('#842049');
        } else {
          if (tempData[0]?._data?.password === passwords) {
            setMessageSnackbar('Login Success');
            setSnackbarbg('#75b798');
            setTimeout(() => {
              navigation.navigate('Home');
            }, 2000);
            // await setCookie("user", JSON.stringify(tempData[0]?._data))
            await AsyncStorage.setItem(
              'users',
              JSON.stringify(tempData[0]?._data),
              setVisible(true),
              dispatch(userSlices.setResultUser(tempData[0]._data))
            );
            console.log(JSON.stringify(tempData[0]?._data));
          } else {
            setVisible(true);
            setMessageSnackbar('Wrong Password');
            setSnackbarbg('#842049');
          }
        }
      }
      );
  };
  return (
    <ScrollView>

    <View style={{alignItems: 'center', width: '100%',paddingBottom: 40, backgroundColor: '#FFF5EC'}}>
      <Snackbar
        wrapperStyle={{top: 0, zIndex: 99999}}
        style={{marginLeft: 30, backgroundColor: Snackbarbg}}
        visible={visible}
        onDismiss={hideSnackbar}
        action={{
          label: 'X',
          onPress: () => {
            hideSnackbar();
          },
        }}>
        <Text style={{width: 900, color: 'white'}}>{messageSnackbar}</Text>
      </Snackbar>
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          overflow: 'hidden',
          marginTop: 100,
        }}>
        <ImageBackground
          source={require('../assets/chef-mama.png')}
          style={{width: 200, height: 200}}></ImageBackground>
      </View>
      <View>
        <Text
          style={{
            marginTop: 30,
            fontSize: 30,
            color: '#fdc6ae',
            textAlign: 'center',
          }}>
          Welcome !
        </Text>
        <Text style={{textAlign: 'center'}}>
          Log in to your exiting account.
        </Text>
        <View style={{width: 300, marginTop: 15}}>
          <TextInput
            label="Email"
            onChangeText={setEmail}
            mode="outlined"
            iconColor="black"
            style={{borderColor: '#fdc6ae'}}
            left={
              <TextInput.Icon
                icon={() => (
                  <Image source={require('../assets/user.png')}></Image>
                )}
              />
            }
          />
          <TextInput
            label="Password"
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry
            style={{borderColor: 'red', marginTop: 15, marginBottom: 10}}
            iconColor="black"
            left={
              <TextInput.Icon
                icon={() => (
                  <Image source={require('../assets/lock.png')}></Image>
                )}
              />
            }
          />
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Upcoming')}>
            <Text style={{textAlign: 'right'}}>Forgot Password ?</Text>
          </TouchableWithoutFeedback>
          <Button
            onPress={handleLogin}
            labelStyle={{color: '#444', fontWeight: 800}}
            style={{
              backgroundColor: '#FFEAD2',
              borderColor: '#fdc6ae',
              borderWidth: 2,
              marginTop: 15,
            }}>
            LOG IN
          </Button>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text>Don’t have an account? </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Register')}>
              <Text style={{color: '#fdc6ae'}}>Sign Up</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>

  );
}
