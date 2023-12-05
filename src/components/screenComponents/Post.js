import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'Mr Maaz',
      postPersonImage: require('../../storage/images/s4.jpg'),
      postImage: require('../../storage/images/s4.jpg'),
      likes: 105,
      isLiked: false,
    },
    {
      postTitle: 'Mr Zain',
      postPersonImage: require('../../storage/images/s5.jpg'),
      postImage: require('../../storage/images/s5.jpg'),
      likes: 10,
      isLiked: false,
    },
    {
      postTitle: 'Saima',
      postPersonImage: require('../../storage/images/s1.jpg'),
      postImage: require('../../storage/images/s1.jpg'),
      likes: 4,
      isLiked: false,
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View key={index} style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.imgContainer}>
                <Image source={data.postPersonImage} style={styles.img} />
                <View style={{paddingLeft: 5}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{fontSize: 20}} />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={data.postImage}
                style={{width: '100%', height: 270}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? 'red' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{fontSize: 20, paddingRight: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={{fontSize: 20}} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Feather name="bookmark" style={{fontSize: 20}} />
              </TouchableOpacity>
            </View>
            <View>
              <Text>
                Liked by {like ? 'you and' : ''}
                {data.likes} others
              </Text>
              <Text style={{fontWeight: '700', fontSize: 15, paddingTop: 2}}>
                Full stack developer in making
              </Text>
              <Text style={{opacity: 0.4, paddingVertical: 2}}>
                View all comments
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={data.postImage}
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 100,
                    backgroundColor: 'orange',
                    marginRight: 10,
                  }}
                />
                <TextInput
                  placeholder="Add a comment "
                  style={{opacity: 0.5}}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo
                  name="emoji-happy"
                  style={{fontSize: 15, color: 'lightgreen', marginRight: 10}}
                />
                <Entypo
                  name="emoji-neutral"
                  style={{fontSize: 15, color: 'pink', marginRight: 10}}
                />
                <Entypo name="emoji-sad" style={{fontSize: 15, color: 'red'}} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.1,
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },

  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});

export default Post;
