import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-controls';
import {useRoute, useNavigation} from '@react-navigation/native';

export default function VideoPlayerScreen() {
  const route = useRoute();
  const {channelData} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <VideoPlayer
        source={{uri: channelData.video_url}}
        // navigator={navigator}
        title={channelData.name}
        paused={true}
        onBack={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
