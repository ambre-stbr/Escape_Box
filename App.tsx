import React, { useState } from 'react';
import HomeScreen from './src/HomeScreen';
import PlayScreen from './src/PlayScreen';
import SuccessScreen from './src/SuccessScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigateToPlayScreen = () => setCurrentScreen('Play');
  const navigateToSuccessScreen = () => setCurrentScreen('Success');

  if (currentScreen === 'Home') {
    return <HomeScreen onPlayPress={navigateToPlayScreen} />;
  } else if (currentScreen === 'Play') {
    return <PlayScreen onEnigmasCompleted={navigateToSuccessScreen} />;
  } else if (currentScreen === 'Success') {
    return <SuccessScreen />;
  }

  return null;
};

export default App;
