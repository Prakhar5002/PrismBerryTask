import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BOTTOM_TAB_STACK, IMAGE } from './screenNames';
import BottomTabStack from './navigators/BottomTabNavigator';
import FullImage from '@app/features/image';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name={BOTTOM_TAB_STACK} component={BottomTabStack} />
        <Stack.Screen name={IMAGE} component={FullImage}/>
    </Stack.Navigator>
  )
}

export default MainStack