import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileForm from './profileInput';

function ProfileScreen() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <Text> Profile</Text>
        <ProfileForm />
        </View>
      </ScrollView>
    );
  }
const Stack = createStackNavigator();

export default ProfileScreen;