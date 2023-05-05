import React, { useState } from 'react';
import HomeScreen from './src/HomeScreen';
import PlayScreen from './src/PlayScreen';
import PlayScreen1 from './src/PlayScreen1';
import SuccessScreen from './src/SuccessScreen';

const App = () => {
  const [screen, setScreen] = useState<'home' | 'play' | 'play1' | 'success'>('home');
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
          onEnigmasCompleted={() => setScreen('play1')}
          onHomePress={handleHome}
        />
      )}
      {screen === 'play1' && (
        <PlayScreen1
          onEnigmasCompleted={handleEnigmasCompleted}
          onHomePress={handleHome}
        />
      )}
      {screen === 'success' && <SuccessScreen onHomePress={handleHome} />}
    </>
  );
};

export default App;
