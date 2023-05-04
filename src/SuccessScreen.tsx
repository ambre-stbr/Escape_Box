import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SuccessScreenProps {
  onHomePress: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onHomePress }) => {
  const videoId = 'dQw4w9WgXcQ';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homeIcon} onPress={onHomePress}>
        <Icon name="home" size={32} color="#ffffff" />
      </TouchableOpacity>
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
  homeIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
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
