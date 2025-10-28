/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Touchable} from 'react-native';

import {useSelector} from 'react-redux';

export default function Profilescreen({navigation}) {
  const Result = useSelector(state => state.user);
  const {resultUser} = Result;
  console.log(resultUser.fullname)


  const [Data, setData] = React.useState({});
  const [Isloading, setIsloading] = React.useState({});

  const getProfile = async () => {
    try {
      setIsloading(true);
      const user = await AsyncStorage.getItem('users')
        .then(result => {
          console.log(`berhasil ambil data`);
        })
        .catch(err => {
          console.log(err);
        });
        
        setData(user);
        console.log(user);
    } catch (error) {
      console.log(`get data failed ${error}`);
    } finally {
      setIsloading(false);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('users');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  };

  React.useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(Data);
  return (
    <ScrollView>
      {Isloading === true ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <View>
          <View
            style={{
              width: '100%',
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#EFC81A',
            }}>
            <ImageBackground
              source={{uri: 'https://i.pinimg.com/736x/d0/0b/f2/d00bf27db42e5a8b5f0b22aefe884fee.jpg'}}
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'cyan',
                borderRadius: 80,
                overflow: 'hidden',
              }}></ImageBackground>
            <Text style={{marginTop: 10, fontSize: 20, color: 'black'}}>
            {/* {resultUser.username} */}Yaqin
            </Text>
          </View>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <View
              style={{
                // height: 300,
                width: '95%',
                padding: 25,
                marginTop: -40,
                borderRadius: 20,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: '#fff',
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      style={{
                        textShadowColor: 'black',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 2,
                      }}
                      name="user"
                      size={30}
                      color="#fdc6ae"
                    />
                    <Button fon style={{color: 'yellow', fontSize: 15}}>
                      <Text style={{color: 'black'}}>Edit Profile</Text>
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
              <View
                style={{
                  backgroundColor: 'grey',
                  width: '100%',
                  height: 0.5,
                  marginVertical: 5,
                }}></View>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Upcoming');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      style={{
                        textShadowColor: 'black',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 2,
                      }}
                      name="bookmark"
                      size={30}
                      color="#fdc6ae"
                    />
                    <Button fon style={{color: 'yellow', fontSize: 15}}>
                      <Text style={{color: 'black'}}>My Recipe</Text>
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
              <View
                style={{
                  backgroundColor: 'grey',
                  width: '100%',
                  height: 0.5,
                  marginVertical: 5,
                }}></View>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Upcoming');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      style={{
                        textShadowColor: 'black',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 2,
                      }}
                      name="bookmark"
                      size={30}
                      color="#fdc6ae"
                    />
                    <Button fon style={{color: 'yellow', fontSize: 15}}>
                      <Text style={{color: 'black'}}>Save</Text>
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
          <View
            style={{
              marginTop: 10,
              marginBottom: 20,
              paddingHorizontal: 20,
            }}>
            <Button  title="Left button"
              onPress={() => handleLogout()}
              style={{backgroundColor: 'red', width: 30}}>
              <Text style={{color: '#fff'}}>Log out</Text>
            </Button>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
