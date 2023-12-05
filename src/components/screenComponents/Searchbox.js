import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
  return (
    <View style={styles.searchboxView}>
      <Ionic name="search" style={styles.ionic} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={styles.textinput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchboxView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'relative',
  },

  ionic: {
    fontSize: 18,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    left: 25,
  },

  textinput: {
    width: '96%',
    borderRadius: 10,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    padding: 4,
    paddingLeft: 40,
  },
});

export default SearchBox;
