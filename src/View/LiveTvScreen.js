import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import MovieList from '../utils/LiveTvList';
import Card from '../component/LiveTvCard';

export default function LiveTvScreen() {
  const navigationHook = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [tempData, setTempData] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Live Tv</Text>
      <View style={styles.searchInputContainer}>
        <Ionicons name="search" size={30} color="#ffe031" />
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.searchInput}
          placeholder="Movie Name/Genre/Year"
          placeholderTextColor={'#fff'}
        />
        <View></View>
      </View>
      <View style={{marginBottom: 50}}>
        <FlatList
          data={MovieList}
          numColumns={4}
          renderItem={list => {
            return <Card channelData={list.item} />;
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
  searchIcon: {},
  searchInputContainer: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#111111',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  searchInput: {
    textAlign: 'center',
    width: '80%',
    color: '#fff',
  },
});
