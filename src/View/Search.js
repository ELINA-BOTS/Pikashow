import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../component/MovieListCard';

import Category from '../utils/Catagorys';

export default function Search() {
  const route = useRoute();
  const {data, type} = route.params;

  const [searchText, setSearchText] = useState('');
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    if (searchText.length > 0) {
      filterSearchData();
    }
  }, [searchText]);

  const randomColor = () => {
    var color = 'hsl(' + Math.random() * 360 + ',100%,75%)';
    return color;
  };
  const filterSearchData = () => {
    const result = data.filter(temp => {
      const nameTextLower = temp.name.toLowerCase();
      const searchTextLower = searchText.toLowerCase();
      const year =
        type == 'series'
          ? temp.seasons[0].year.toString()
          : temp.year.toString().toLowerCase();
      if (
        nameTextLower.indexOf(searchTextLower) != -1 ||
        temp.category.includes(searchText) ||
        year.indexOf(searchTextLower) != -1
      ) {
        return temp;
      }
    });
    setTempData(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Icon name="search" size={30} color="#ffe031" />
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.searchInput}
          placeholder="Movie Name/Genre/Year"
          placeholderTextColor={'#fff'}
        />
        <Ionicons name="mic" size={30} color="#ffe031" />
      </View>
      {searchText.length < 1 ? (
        <View style={styles.categoryCardContainer}>
          <View style={styles.categoryCardinnerContainer}>
            {Category.map((list, index) => {
              const textColor = randomColor();
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.category}
                  onPress={() => setSearchText(list.name)}>
                  <Text style={[styles.categoryCardText, {color: textColor}]}>
                    {list.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : (
        <View style={{marginBottom: 50}}>
          {tempData.length > 0 ? (
            <FlatList
              data={tempData}
              numColumns={3}
              renderItem={list => {
                return <Card movieData={list.item} type={type} />;
              }}
            />
          ) : (
            <View>
              <Text style={styles.nodatafound}>No Data Found</Text>
            </View>
          )}
        </View>
      )}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    // justifyContent: 'space-between',
  },
  searchInput: {
    textAlign: 'center',
    width: '80%',
    color: '#fff',
  },
  searchInputContainer: {
    marginTop: 25,
    backgroundColor: '#111111',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  category: {
    backgroundColor: '#111111',
    padding: 7,
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  categoryCardinnerContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  categoryCardText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  categoryCardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nodatafound: {
    color: '#ffe031',
    textAlign: 'center',
    marginTop: 20,
  },
});
