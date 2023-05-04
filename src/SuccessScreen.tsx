import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const SuccessScreen = () => {
  const videoId = 'dQw4w9WgXcQ';

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.successText}>Congratulations! You've completed all enigmas!</Text>
      </View>
      <View style={styles.videoContainer}>
        <YoutubePlayer
          height={300}
          width={'100%'}
          videoId={videoId}
          play={true}
          initialPlayerParams={{
            preload: true,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  successText: {
    fontSize: 27,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 100,
  },
  videoContainer: {
    width: '90%',
    marginTop: 80,
    marginBottom: 40,
  },
});

export default SuccessScreen;
