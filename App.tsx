import React, { useState } from 'react';
import HomeScreen from './src/HomeScreen';
import PlayScreen from './src/PlayScreen';
import SuccessScreen from './src/SuccessScreen';

const App = () => {
  const [screen, setScreen] = useState<'home' | 'play' | 'success'>('home');
  const [enigmaCompleted, setEnigmaCompleted] = useState(false);

  const handlePlay = () => {
    setScreen('play');
  };

  const handleEnigmasCompleted = () => {
    setScreen('success');
  };

  const handleHome = () => {
    setScreen('home');
    setEnigmaCompleted(false);
  };

  return (
    <>
      {screen === 'home' && <HomeScreen onPlayPress={handlePlay} />}
      {screen === 'play' && (
        <PlayScreen
          onEnigmasCompleted={handleEnigmasCompleted}
          onHomePress={handleHome}
        />
      )}
      {screen === 'success' && <SuccessScreen onHomePress={handleHome} />}

    </>
  );
};

export default App;