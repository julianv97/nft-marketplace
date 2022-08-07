import React from 'react';
import { NativeBaseProvider } from 'native-base';
import ContentNavigator from './src/navigation/ContentNavigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <ContentNavigator />
    </NativeBaseProvider>
  );
};

export default App;
