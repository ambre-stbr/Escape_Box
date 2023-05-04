import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HomeScreenProps {
  onPlayPress: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onPlayPress }) => {
  const handlePlayButtonPress = () => {
    onPlayPress();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Escape Box</Text>
      <TouchableOpacity style={styles.playButton} onPress={handlePlayButtonPress}>
        <Text style={styles.playButtonText}>Jouer</Text>
      </TouchableOpacity>
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
  appName: {
    fontSize: 48,
    color: '#ffffff',
    marginBottom: 250,
  },
  playButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: 'green',
    borderRadius: 50,
  },
  playButtonText: {
    fontSize: 24,
    color: '#ffffff',
  },
});

export default HomeScreen;
