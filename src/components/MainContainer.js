import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';
import colors from '@app/styles/colors';
import images from '@app/assets/images';

const MainContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.innercontainer} source={images.bg} resizeMode="contain" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  innercontainer: {
    marginTop: 100,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default MainContainer;
