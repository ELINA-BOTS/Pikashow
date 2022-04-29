import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import MovieList from '../utils/BollywoodMovieList';
import Card from '../component/MovieListCard';

export default function BollywoodScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bollywood</Text>
      <View style={{marginBottom: 50}}>
        <FlatList
          data={MovieList}
          numColumns={3}
          renderItem={list => {
            return <Card movieData={list.item} />;
          }}
        />
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
});
