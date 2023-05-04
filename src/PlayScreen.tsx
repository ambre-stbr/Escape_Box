import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PlayScreenProps {
  onEnigmasCompleted: () => void;
}

const PlayScreen: React.FC<PlayScreenProps> = ({ onEnigmasCompleted }) => {
  const [buttonEnabled, setButtonEnabled] = useState(false);

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
      <Text style={styles.enigmaText}>Here is the enigma explanation...</Text>
      <TouchableOpacity
        style={[styles.nextButton, buttonEnabled ? styles.nextButtonEnabled : styles.nextButtonDisabled]}
        onPress={handleNextButtonPress}
        disabled={!buttonEnabled}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.simulateButton} onPress={handleEnigmaSolved}>
        <Text style={styles.simulateButtonText}>Simulate Enigma Solved</Text>
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
});

export default PlayScreen;
