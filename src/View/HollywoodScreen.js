import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import MovieList from '../utils/HollywoodMovieList';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../component/MovieListCard';

export default function HollywoodScreen() {
  const navigationHook = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hollywood</Text>
      <View style={{marginBottom: 50}}>
        <FlatList
          data={MovieList}
          numColumns={3}
          renderItem={list => {
            return <Card movieData={list.item} type="hollwood" />;
          }}
        />
        <TouchableOpacity
          style={styles.searchBottomConatiner}
          onPress={() =>
            navigationHook.navigate('Search', {
              data: MovieList,
              type: 'hollywood',
            })
          }>
          <Ionicons
            name="search"
            color={'#ffe031'}
            size={20}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  headerText: {
    color: '#ffe031',
    textAlign: 'center',
    marginTop: 20,
  },
  searchBottomConatiner: {
    backgroundColor: '#111111',
    height: 60,
    width: 60,
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
