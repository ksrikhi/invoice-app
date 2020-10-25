import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import getCustomerDetail from './components/utill';
import InputButton from './components/button';
import OverlayMessage from './components/overlayBox';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BillingDetail from './billingDetails';
import BillingItems from './billingItems';

function HomeScreen() {
  const [payload, setPayload] = useState({});
  const [listItem, setListItem] = useState([]);
  const [resData, setResData] = useState(null);

  const sendInvoice = async () => {
    const profileDetail = await getCustomerDetail();
    const data = {
      billingDetail: payload,
      items: listItem,
      profileDetail: profileDetail
    }
    axios.post('https://techbyteinvoice.herokuapp.com/api/sendEmail', data)
      .then(function (response) {
        setResData(response.data);
      })

      .catch(function (error) {
      setResData({type: 'error', message: 'something went wrong'});
      });
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BillingDetail payload={payload} setPayload={setPayload} />
        <BillingItems listItem={listItem} setListItem={setListItem} />
        <InputButton style={{ width: 800 }}
          disabled={!(payload.clientName && payload.city
            && payload.state && payload.phoneNumber && payload.email)}
          title="Send Invoice"
          onPress={
            () => sendInvoice()
          }
        />
         {resData ? <OverlayMessage resData={resData} setResData={setResData}/>: null}
       
      </View>
    
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default HomeScreen;

// const styles = StyleSheet.create({
//   submitButton: {
//     backgroundColor: primary,
//     padding: 10,
//     marginVertical: 15,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center', 
//     width: '80%',
//   },
//   Text: {
//      width: '80%'
//   }
// })