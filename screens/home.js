import React from 'react';
import { View, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BillingDetail from './billingDetails';
import BillingItems from './billingItems';



function HomeScreen() {
  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BillingDetail />
      <BillingItems />
    </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default HomeScreen;