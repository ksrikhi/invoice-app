import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileForm from './profileInput';

function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Profile</Text>
        <ProfileForm />
      </View>
    );
  }
const Stack = createStackNavigator();

    export default ProfileScreen;