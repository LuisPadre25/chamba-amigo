import React from 'react';
import { View, StatusBar } from 'react-native';
import RootNavigator from './app/navigation/RootNavigator';
import { ThemeProvider } from './shared/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </View>
    </ThemeProvider>
  );
};

export default App; 