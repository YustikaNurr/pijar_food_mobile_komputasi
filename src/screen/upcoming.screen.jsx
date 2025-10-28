/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Touchable, TouchableWithoutFeedback} from 'react-native';

export default function Upcoming({navigation}) {
  return (
    <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
      <Text style={{fontSize: 40, textAlign: 'center'}}>Soon</Text>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>Back to </Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <Text style={{color: '#EFC81A'}}>Home</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
