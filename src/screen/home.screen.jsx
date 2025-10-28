/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Searchbar, Button} from 'react-native-paper';
import recipeList from '../api/recipe.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen({navigation}) {
  const [Data, setData] = React.useState({});

  const getProfile = async () => {
    try {
      const user = await AsyncStorage.getItem('users');
      setData(user);
    } catch (error) {
      console.log(`get data failed ${error}`);
    }
  };
  console.log(Data);
  const menuCategory = [
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('../assets/soup.png')}
        />
      ),
      type: 'soup',
      name: 'Soup',
    },
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('../assets/seafood.png')}
        />
      ),
      type: 'seafood',
      name: 'SeaFood',
    },
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('../assets/fast-food.png')}
        />
      ),
      type: 'fastfood',
      name: 'FastFood',
    },
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('../assets/drink.png')}
        />
      ),
      type: 'drink',
      name: 'Drink',
    },
  ];

  //search logic
  const [keywords, setKeyword] = React.useState(null);
  const [ListSearch, setListSearch] = React.useState([]);

  const searchData = async keyword => {
    if (keyword.length === 0 || keyword === null) {
      setListSearch([]);
      setKeyword(null);
    } else {
      setKeyword(keyword);
      keyword = keyword.toLowerCase();
      const result = await recipeList.filter(item =>
        item.title.toLowerCase().includes(keyword),
      );
      setListSearch(result);
      // console.log(result);
    }
  };
  // const jadi = searchData(keywords)

  React.useEffect(() => {
    setTimeout(() => {
    }, 2000);
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          height: 250,
          backgroundColor: '#EFC81A',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <View style={{position: 'absolute', right: 20, top: 20}}>
          {Data === null ? (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Login')}>
              <Button style={{backgroundColor: '#FFEAD4'}}>
                <Text style={{color: '#555', fontWeight: 500}}>Login</Text>
              </Button>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../assets/user.png')}
                style={{height: 30, width: 30}}></Image>
            </TouchableWithoutFeedback>
          )}
        </View>
        <Image
          source={require('../assets/chef-mama.png')}
          style={{width: 180, height: 180}}></Image>
      </View>
      <View
        style={{
          marginTop: -50,
          width: '100%',
          backgroundColor: '#EFC81A',
          padding: 10,
          zIndex: 3,
          borderRadius: 40,
        }}>
        <Searchbar
          width="100%"
          placeholder="Search Pasta, Bread, etc"
          style={styles.searchBox}
          onChangeText={searchData}
        />
      </View>

      {ListSearch.length > 0 && keywords !== null && keywords.length > 0 ? (
        <View style={{padding: 20, gap: 10}}>
          {ListSearch.map((item, key) => (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                navigation.navigate('Detail_Recipe', item);
              }}>
              <View
                style={{
                  borderWidth: 2,
                  width: '100%',
                  height: 90,
                  borderRadius: 25,
                  borderColor: 'grey',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <View style={{justifyContent: 'center', marginLeft: 10}}>
                  <Image
                    style={{width: 64, height: 64, borderRadius: 16}}
                    source={{uri: item.image}}
                  />
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text style={{fontSize: 18, color: 'black'}}>
                    {item.title}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>{item.desk}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      alignItems: 'center',
                      marginTop: 3,
                    }}>
                    <Image source={require('../assets/stars.png')} />
                    <Text>{item.rating}</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      ) : ListSearch.length === 0 &&
        keywords !== null &&
        keywords.length > 0 ? (
        <View style={{padding: 20, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: '#444', fontSize: 17}}>
            No suitable menu
          </Text>
        </View>
      ) : (
        <View style={styles.root}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}></View>
          <Text style={styles.heading1}>Category</Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            {menuCategory.map((item, key) => (
              <TouchableWithoutFeedback
                key={key}
                onPress={() => {
                  navigation.navigate('Kategori', item);
                }}>
                <View>
                  <View
                    style={{
                      width: 64,
                      height: 64,
                      backgroundColor: '#FFEAD4',
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // shadowColor: 'black',
                      // shadowOffset: {width: 3, height: 4},
                      // shadowOpacity: 0.5,
                      // shadowRadius: 10,
                    }}>
                    {item.icon}
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 5,
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          <View
            style={{
              marginTop: 5,
              paddingTop: 5,
            }}>
            <Text style={styles.heading2}>New Recipes</Text>
            {/* New recipe content start */}
            <ScrollView horizontal={true}>
              <View style={{flexDirection: 'row', gap: 5}}>
                {recipeList
                  ?.filter(recipe => recipe.isNew)
                  .map((item, key) => (
                    <TouchableWithoutFeedback
                      key={key}
                      onPress={() => {
                        navigation.navigate('Detail_Recipe', item);
                      }}>
                      <View>
                        <ImageBackground
                          source={{uri: item.image}}
                          imageStyle={{borderRadius: 20}}
                          style={styles.boxShadow}>
                          <Text style={styles.textWithShadow}>
                            {item.title}
                          </Text>
                        </ImageBackground>
                      </View>
                    </TouchableWithoutFeedback>
                  ))}
              </View>
            </ScrollView>
          </View>
          {/* New recipe content end */}

          <Text style={styles.heading3}>Popular Recipes</Text>
          <View style={{gap: 5}}>
            {/* popular food content start */}
            {recipeList
              ?.filter(recipe => recipe.isPopular)
              .map((item, key) => (
                <TouchableWithoutFeedback
                  key={key}
                  onPress={() => {
                    navigation.navigate('Detail_Recipe', item);
                  }}>
                  <View
                    style={{
                      gap: 20,
                      flexDirection: 'row',
                      backgroundColor: '#FFEAD2',
                      borderRadius: 15,
                      padding: 5,
                    }}>
                    <View style={{justifyContent: 'center'}}>
                      <Image
                        style={{width: 64, height: 64, borderRadius: 16}}
                        source={{uri: item.image}}
                      />
                    </View>
                    <View>
                      <Text style={{fontSize: 16, color: 'black'}}>
                        {item.title}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text>{item.desk}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 5,
                          alignItems: 'center',
                          marginTop: 3,
                        }}>
                        <Image source={require('../assets/stars.png')} />
                        <Text>{item.rating}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    marginTop: -20,
    backgroundColor: '#FFF5EC',
    // borderRadius: 30,
  },
  searchBox: {
    backgroundColor: '#FFEAD2',
    borderColor: 'black',
  },
  heading1: {
    marginTop: 10,
    // marginBottom: 10,
    fontSize: 20,
    color: '#333',
    // backgroundColor: '#fdc6ae',
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  heading2: {
    marginTop: 10,
    // marginBottom: 10,
    // backgroundColor: '#fdc6ae',
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 5,
    fontSize: 20,
    color: '#333',
  },
  heading3: {
    marginTop: 20,
    // marginBottom: 5,
    fontSize: 20,
    color: '#333',
    // backgroundColor: '#fdc6ae',
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  textWithShadow: {
    justifyContent: 'flex-end',
    paddingLeft: 7,
    paddingTop: 130,
    fontSize: 15,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  boxShadow: {
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1,
    shadowRadius: 5,
    width: 130,
    height: 160,
  },
});

export default HomeScreen;
