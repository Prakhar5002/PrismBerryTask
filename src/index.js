import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation';
import colors from './styles/colors';
import { SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.darkBlue }}>
        <StatusBar animated={true} backgroundColor={colors.darkBlue} />
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
