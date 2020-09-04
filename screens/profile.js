import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import UselessTextInput from  './textInput';

function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Profile</Text>
        <UselessTextInput />
    
      </View>
    );
  }
const Stack = createStackNavigator();

    export default ProfileScreen;