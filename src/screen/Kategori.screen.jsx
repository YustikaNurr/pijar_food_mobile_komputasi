/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
// import {Button} from 'react-native-paper';
// import {black} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import recipeList from '../api/recipe.json';
import { LogBox } from 'react-native';

export default function KategoriScreen({navigation, route}) {
  LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state', ]);
  const {type} = route.params;
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
              {type}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: '#fe976a',
            marginTop: 5,
            marginBottom: 5,
          }}></View>

        <View style={{padding: 15, gap: 15}}>
          {recipeList
            .filter(item => item.type == type)
            .map((item, key) => (
              <TouchableWithoutFeedback
                key={key}
                onPress={() => {
                  navigation.navigate('Detail_Recipe', item);
                }}>
                <View>
                  <View
                    style={{
                      backgroundColor: '#FFEAD2',
                      width: '100%',
                      padding: 10,
                      borderRadius: 20,
                      flexDirection: 'row',
                      borderWidth: 2,
                      borderColor: '#fe976a'
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{height: 85, width: 85, borderRadius: 20}}></Image>
                    <View
                      style={{
                        width: '45%',
                        marginLeft: 15,
                        justifyContent: 'space-around',
                      }}>
                      <Text style={{fontSize: 20, color:'#333'}}>{item.title}</Text>
                      <Text style={{color: '#888'}}>{item.desk}</Text>
                      <Text style={{color: '#555'}}>by {item.made}</Text>
                    </View>
                    <View style={{justifyContent: 'center', right: 0}}>
                      <TouchableWithoutFeedback
                        onPress={() => Linking.openURL(item?.youtube?.link)}>
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            borderWidth: 2,
                            borderColor: '#fe976a',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            paddingLeft: 5,
                            marginLeft: 10

                          }}>
                          <Icon name="play" size={30} color="#fe976a" />
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}
