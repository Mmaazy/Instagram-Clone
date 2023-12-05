import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import SearchBox from '../screenComponents/Searchbox';

const Search = () => {
  return (
    <View style={styles.searchPage}>
      <ScrollView>
        <SearchBox />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchPage: {
    width: '100%',
    height: '100%',
    backgroungColor: 'white',
    position: 'relative',
  },
});

export default Search;
