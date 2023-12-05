import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Heart from 'react-native-vector-icons/Ionicons';

const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {image} = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.statusBar}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
      </View>
      <View style={styles.imgContainer}>
        <View style={styles.imgView}>
          <Image source={image} style={styles.img} />
        </View>
        <View style={styles.txtView}>
          <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
            {name}
          </Text>
          <TouchableOpacity>
            <Ionic
              name="close"
              style={{fontSize: 20, color: 'white', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{position: 'absolute', width: '100%', height: 500}}
      />

      <View style={styles.placeholderView}>
        <TextInput
          placeholder="Send Message"
          placeholderTextColor="white"
          style={styles.myPlaceholder}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="navigation" style={{fontSize: 30, color: 'white'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusBar: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18,
  },

  imgContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
  },

  imgView: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
  },

  txtView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },

  myPlaceholder: {
    borderColor: 'white',
    borderRadius: 25,
    width: '85%',
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    fontSize: 20,
    color: 'white',
  },
  placeholderView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
});

export default Status;
