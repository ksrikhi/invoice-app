import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default HomeScreen;