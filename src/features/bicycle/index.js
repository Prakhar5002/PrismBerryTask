import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import MainContainer from '@app/components/MainContainer';
import colors from '@app/styles/colors';
import images from '@app/assets/images';
import globalStyles from '@app/styles/globalStyles';
import homeData from '@app/assets/data/homeData';
import { IMAGE } from '@app/navigation/screenNames';

const windowWidth = Dimensions.get('window').width;

const Bicycle = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = homeData.map((item) => {
      return { ...item, isWishlist: false };
    });
    setData(newData);
  }, []);

  const homeOptions = [
    { id: 0, source: images.all },
    { id: 1, source: images.electric },
    { id: 2, source: images.road },
    { id: 3, source: images.mountain },
    { id: 4, source: images.accessory },
  ];

  const navigateDetails = (item) => {
    navigation.push(IMAGE, item);
  };

  const handleWishList = (id) => {
    let newData = [...data];
    newData = newData.map((item) => {
      if (item.id === id) {
        return { ...item, isWishlist: !item.isWishlist };
      }
      return { ...item };
    });
    setData(newData);
  };

  const renderHomeOptions = ({ item, index }) => (
    <Pressable>
      <Image style={[styles.optionIcon]} source={item.source} />
    </Pressable>
  );

  const headerComponent = (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Choose Your Bike</Text>
        <Pressable>
          <Image style={globalStyles.icon} source={images.search} />
        </Pressable>
      </View>
      <ImageBackground
        style={{
          width: windowWidth - 10,
          height: windowWidth - 120,
          marginTop: 10,
          justifyContent: 'center',
          padding: 40,
          alignSelf: 'center',
        }}
        source={images.item_background}
        resizeMode="cover">
        <Image
          style={{ width: 300, height: 150, top: -24, alignSelf: 'center' }}
          source={images.electric_bicycle}
          resizeMode="contain"
        />
        <Text style={styles.itemDiscount}>30% Off</Text>
      </ImageBackground>
      <FlatList
        data={homeOptions}
        horizontal
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flex: 1,
          paddingBottom: 20,
        }}
        keyExtractor={(item) => item.id}
        renderItem={renderHomeOptions}
      />
    </View>
  );

  const renderItems = ({ item }) => (
    <Pressable onPress={() => navigateDetails(item)}>
      <ImageBackground
        style={{
          width: windowWidth / 2 - 30,
          height: 250,
          marginBottom: 20,
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
        source={images.list_item}>
        <Pressable style={{ top: -6 }} onPress={() => handleWishList(item.id)}>
          <Image
            style={{ height: 40, width: 40, alignSelf: 'flex-end' }}
            source={item.isWishlist ? images.heart_filled : images.heart}
          />
        </Pressable>
        <Image style={{ width: 100, height: 70 }} source={item.source} resizeMode="cover" />
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
        <Text style={styles.itemTitle}>{item.cost}</Text>
      </ImageBackground>
    </Pressable>
  );

  return (
    <MainContainer>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={headerComponent}
          renderItem={renderItems}
          columnWrapperStyle={{ flex: 1, justifyContent: 'space-evenly' }}
        />
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 20,
  },
  headerText: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
  },
  itemDiscount: {
    fontSize: 22,
    color: colors.grey,
    fontWeight: '700',
    marginBottom: 30,
  },
  optionIcon: {
    width: 50,
    height: 50,
  },
  itemTitle: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 6,
  },
  itemDesc: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 6,
  },
});

export default Bicycle;
