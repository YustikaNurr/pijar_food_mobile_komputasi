/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button, TextInput, Snackbar} from 'react-native-paper';
import {TouchableWithoutFeedback} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { createIconSetFromFontello } from 'react-native-vector-icons';

export default function Registerscreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVerif, setPasswordVerif] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [Snackbarbg, setSnackbarbg] = React.useState('');

  const [visible, setVisible] = React.useState(false);
  const [messageSnackbar, setMessageSnackbar] = React.useState('');
  const hideSnackbar = () => setVisible(false);
  const potoProfile = "https://i.pinimg.com/564x/d4/29/1e/d4291ea760fcbf77ef282cb83ab7127b.jpg"

  const handleRegister = async() => {
    if (password === passwordVerif) {
    
      firestore()
        .collection('users')
        .add({
          email,
          password,
          fullname,
          phone,
          photo: potoProfile,
          created_at: new Date().getTime(),

        })
        .then(() => {
            setVisible(true)
            setMessageSnackbar('Register Successfully')
            setSnackbarbg('#75b798')
            setTimeout(() => {
                navigation.navigate('Login')
            }, 2000);
        }).catch((err) => {
            console.log(err)
        });
    } else {
      setVisible(true);
      setMessageSnackbar('Password is not same!');
      setSnackbarbg('#842049')
    }
  };
  return (
    <View style={{padding: 20}}>
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
      <Text
        style={{
          fontSize: 30,
          color: '#fdc6ae',
          textAlign: 'center',
          marginTop: 100,
        }}>
        Let’s Get Started !
      </Text>
      <Text style={{textAlign: 'center'}}>
        Create new account to access all feautures
      </Text>
      <View style={{marginTop: 25}}>
        <TextInput
          label="Fullname"
          onChangeText={setFullname}
          mode="outlined"
          iconColor="black"
          left={
            <TextInput.Icon
              icon={() => (
                <Image source={require('../assets/user.png')}></Image>
              )}
            />
          }
        />
        <TextInput
          label="Email"
          onChangeText={setEmail}
          mode="outlined"
          iconColor="black"
          keyboardType="email-address"
          left={
            <TextInput.Icon
              icon={() => (
                <Image source={require('../assets/mail.png')}></Image>
              )}
            />
          }
        />
        <TextInput
          label="Phone Number"
          onChangeText={setPhone}
          mode="outlined"
          iconColor="black"
          keyboardType="phone-pad"
          left={
            <TextInput.Icon
              icon={() => (
                <Image source={require('../assets/phone.png')}></Image>
              )}
            />
          }
        />
        <TextInput
          label="Password"
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry
          iconColor="black"
          left={
            <TextInput.Icon
              icon={() => (
                <Image source={require('../assets/unlock.png')}></Image>
              )}
            />
          }
        />
        <TextInput
          label="Confirm Password"
          onChangeText={setPasswordVerif}
          mode="outlined"
          secureTextEntry
          iconColor="black"
          left={
            <TextInput.Icon
              icon={() => (
                <Image source={require('../assets/lock.png')}></Image>
              )}
            />
          }
        />
        <Button
          onPress={handleRegister}
          labelStyle={{color: '#444', fontWeight: 800}}
          style={{
            backgroundColor: '#FFEAD2',
            borderColor: '#fdc6ae',
            borderWidth: 2,
            marginTop: 15,
          }}>
          CREATE
        </Button>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text>Already have account? </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#fdc6ae'}}>Log in Here</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
