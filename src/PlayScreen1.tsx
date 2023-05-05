import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface PlayScreen1Props {
  onEnigmasCompleted: () => void;
  onHomePress: () => void;
}

const PlayScreen1: React.FC<PlayScreen1Props> = ({ onEnigmasCompleted, onHomePress }) => {
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const handleEnigmaSolved = () => {
    setButtonEnabled(true);
  };

  const handleNextButtonPress = () => {
    if (buttonEnabled) {
      onEnigmasCompleted();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homeIcon} onPress={onHomePress}>
        <Icon name="home" size={32} color="#ffffff" />
      </TouchableOpacity>
      <Text style={styles.enigmaText}>N E S O</Text>
      <TouchableOpacity
        style={[styles.nextButton, buttonEnabled ? styles.nextButtonEnabled : styles.nextButtonDisabled]}
        onPress={handleNextButtonPress}
        disabled={!buttonEnabled}
      >
        <Text style={styles.nextButtonText}>Suivant</Text>
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
  enigmaText: {
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 250,
  },
  nextButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 20,
  },
  nextButtonEnabled: {
    backgroundColor: '#4caf50',
  },
  nextButtonDisabled: {
    backgroundColor: '#f44336',
  },
  nextButtonText: {
    fontSize: 24,
    color: '#ffffff',
  },
  simulateButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#2196f3',
    borderRadius: 50,
  },
  simulateButtonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  homeIcon: {
    position: 'absolute',
    top: 50,
    left: 15,
  },
});

export default PlayScreen1;
