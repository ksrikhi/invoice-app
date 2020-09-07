import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import MyTabs from './screens/tab'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ title: 'Invoice' }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}