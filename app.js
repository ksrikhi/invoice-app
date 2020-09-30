import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import MyTabs from './screens/tab';

const Stack = createStackNavigator();
const theme = {
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MyTabs}
            options={{ title: 'Invoice' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}