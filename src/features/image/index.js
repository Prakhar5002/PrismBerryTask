import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import images from '@app/assets/images';
import colors from '@app/styles/colors';

const windowWidth = Dimensions.get('window').width;

const FullImage = ({ route, navigation }) => {
  const { desc, source } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Pressable onPress={() => navigation.goBack()} style={styles.header}>
          <Image style={{ width: 80, height: 80 }} source={images.back} />
          <Text style={styles.headerText}>{desc}</Text>
        </Pressable>
        <Image style={styles.innercontainer} source={images.bg} resizeMode="cover" />
        <Image style={styles.image} source={source} resizeMode="contain" />
      </View>
      <View style={styles.bottomContainer}>
        <ImageBackground
          style={{ width: 150, height: 50 }}
          source={images.button_frame}>
          </ImageBackground>
          <ImageBackground
          style={{ width: 200, height: 50 }}
          source={images.button_frame}>
          </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  innercontainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    marginTop: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    left: -50,
  },
  bottomContainer: {
    width: windowWidth,
    height: 100,
    backgroundColor: '#353F54',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26
  },
});

export default FullImage;
