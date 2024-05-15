import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation';
import changeNavigationBarColor, { showNavigationBar } from 'react-native-navigation-bar-color';
import { useFocusEffect } from '@react-navigation/native';
import colors from './styles/colors';
import { SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  useFocusEffect(() => {
    try {
      showNavigationBar();
      changeNavigationBarColor(colors.lightBlue, true);
    } catch (e) {
      console.log(e); // {success: false}
    }
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.darkBlue }}>
      <StatusBar animated={true} backgroundColor={colors.darkBlue} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
