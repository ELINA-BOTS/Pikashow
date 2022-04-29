import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import React from 'react';

// import local
import LogoImg from '../../assets/logo.png';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.titleText}>PikaShow</Text>
      <Image style={styles.logoImg} source={LogoImg} />
      <Text style={styles.bottomText}>Made with Me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoImg: {
    width: 200,
    height: 200,
  },
  bottomText: {
    color: '#fff',
  },
});
