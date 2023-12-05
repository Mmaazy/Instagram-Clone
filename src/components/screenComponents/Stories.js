import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your story',
      image: require('../../storage/images/s5.jpg'),
    },
    {
      id: 0,
      name: 'Ali',
      image: require('../../storage/images/s2.jpg'),
    },
    {
      id: 0,
      name: 'Hira',
      image: require('../../storage/images/s3.jpg'),
    },
    {
      id: 0,
      name: 'Arham',
      image: require('../../storage/images/s4.jpg'),
    },
    {
      id: 0,
      name: 'Maaz',
      image: require('../../storage/images/s1.jpg'),
    },
    {
      id: 0,
      name: 'Zoya',
      image: require('../../storage/images/s6.jpg'),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <View style={styles.circlePlayOuterView}>
              {data.id == 1 ? (
                <View style={styles.circlePlusView}>
                  <Entypo name="circle-with-plus" style={styles.circlePlus} />
                </View>
              ) : null}
              <View style={styles.imgView}>
                <Image source={data.image} style={styles.img} />
              </View>
              <Text style={styles.imgText}>{data.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  circlePlus: {
    fontSize: 20,
    color: '#405de6',
    backgroundColor: 'white',
    borderRadius: 100,
  },

  circlePlusView: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    zIndex: 1,
  },

  circlePlayOuterView: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    position: 'relative',
  },

  img: {
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },

  imgView: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgText: {
    textAlign: 'center',
    fontSize: 10,
    // opacity: data.id == 0 ? 1 : 0.5,
  },
});

export default Stories;
