import React from 'react';
import { View, Image, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_TAB_CONFIG } from '@app/configs';
import colors from '@app/styles/colors';
import images from '@app/assets/images';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}>
              {isFocused ? (
                <ImageBackground
                  style={{
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: -6
                  }}
                  source={images.tab_background}>
                  <Image
                    style={{
                      width: 26,
                      height: 26,
                      tintColor: isFocused ? '#FFFFFF' : '#dbdbdb',
                      top: isFocused ? -22 : 0,
                      left: -6,
                    }}
                    resizeMode="contain"
                    source={BOTTOM_TAB_CONFIG[index].source}
                  />
                </ImageBackground>
              ) : (
                <Image
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: isFocused ? '#FFFFFF' : '#dbdbdb',
                    top: isFocused ? -22 : 0,
                  }}
                  resizeMode="contain"
                  source={BOTTOM_TAB_CONFIG[index].source}
                />
              )}
            </Pressable>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}>
      {BOTTOM_TAB_CONFIG.map((screen) => (
        <Tab.Screen key={screen.id} name={screen.name} component={screen.screen} />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabStack;
