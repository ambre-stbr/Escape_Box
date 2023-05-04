import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SuccessScreenProps {
  onHomePress: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onHomePress }) => {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';

  const handleVideoButtonPress = async () => {
    const supported = await Linking.canOpenURL(videoUrl);

    if (supported) {
      await Linking.openURL(videoUrl);
    } else {
      alert(`Unable to open the URL: ${videoUrl}`);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homeIcon} onPress={onHomePress}>
        <Icon name="home" size={32} color="#ffffff" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.successText}>Toutes nos félicitations! Vous avez terminé toutes les énigmes!</Text>
      </View>
      <TouchableOpacity style={styles.rewardButton} onPress={handleVideoButtonPress}>
        <Text style={styles.rewardButtonText}>Voici votre récompense!</Text>
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
    marginBottom: 150,
  },
  rewardButton: {
    backgroundColor: '#0066ff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
  },
  rewardButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default SuccessScreen;
