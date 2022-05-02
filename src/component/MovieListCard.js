import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';

export default function MovieListCard({movieData, type}) {
  return (
    <View style={styles.container}>
      {/* <Text>Card</Text> */}
      <View style={styles.qualityLabel}>
        <Text style={styles.qualityLabelText}>
          {type === 'series' ? movieData.rating : movieData.qualityLable}
        </Text>
      </View>
      <Image
        source={{uri: movieData.posterUrl}}
        resizeMode="stretch"
        style={styles.imagePoster}
      />
      <View style={styles.bottomInformationContainer}>
        <Text style={styles.movieName}>{movieData.name}</Text>
        <Text style={styles.movieYear}>
          {type === 'series'
            ? `Total Seasons ${movieData.seasons.length}`
            : movieData.year}
        </Text>
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: height / 3,
    width: width / 3 - 14,
    backgroundColor: '#fff',
    margin: 7,
    position: 'relative',
  },
  imagePoster: {
    width: '100%',
    height: '100%',
  },
  qualityLabel: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: '#000',
    padding: 3,
  },
  qualityLabelText: {
    color: '#ffe031',
    fontSize: 12,
  },
  bottomInformationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  movieName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  movieYear: {
    color: '#fff',
    fontSize: 12,
  },
});
