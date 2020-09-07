import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
    return (
      <view>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
      </view>
    );
  }

  const Tab = createBottomTabNavigator();

 export default HomeScreen;