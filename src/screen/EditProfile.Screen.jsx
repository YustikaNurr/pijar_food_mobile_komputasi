/* eslint-disable prettier/prettier */
import React from 'react';
import {Button} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function EditProfileScreen({navigation}) {
  return (
    <ScrollView>
      <View>
        <View style={{padding: 20}}>
          <View>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.goBack();
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  zIndex: 1,
                  gap: 5,
                }}>
                <Icon name="angle-left" size={30} color="#fe976a" />
                <Text style={{color: '#fe976a'}}>Back</Text>
              </View>
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: 30,
                color: '#fe976a',
                width: '100%',
                textTransform: 'capitalize',
                textAlign: 'center',
              }}>
              Edit Profile
            </Text>
          </View>
          <View
            style={{height: 3, backgroundColor: 'grey', marginVertical: 20}}>
         
          </View>

          <View style={{height: 500, padding: 10, flexDirection: 'column'}}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('Upcoming');
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{
                      textShadowColor: 'black',
                      textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 2,
                    }}
                    name="image"
                    size={30}
                    color="#fdc6ae"
                  />
                  <Button fon style={{color: 'yellow', fontSize: 15}}>
                    <Text style={{color: 'black'}}>Edit Photo Profile</Text>
                  </Button>
                </View>
                <Icon
                  style={{
                    textShadowColor: 'black',
                    textShadowOffset: {width: 1, height: 1},
                    textShadowRadius: 2,
                  }}
                  name="angle-right"
                  size={30}
                  color="#fdc6ae"
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('Upcoming');
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{
                      textShadowColor: 'black',
                      textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 2,
                    }}
                    name="lock"
                    size={30}
                    color="#fdc6ae"
                  />
                  <Button fon style={{color: 'yellow', fontSize: 15}}>
                    <Text style={{color: 'black', marginLeft: 25}}>Edit Your Account</Text>
                  </Button>
                </View>
                <Icon
                  style={{
                    textShadowColor: 'black',
                    textShadowOffset: {width: 1, height: 1},
                    textShadowRadius: 2,
                  }}
                  name="angle-right"
                  size={30}
                  color="#fdc6ae"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
