import React, { useState } from 'react';
// import axios from 'axios';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import InputBox from './components/inputBox';
// import getCustomerDetail from './components/utill';
import { primary } from '../theme/constant';
import ItemCard from './components/itemCard';

function BillingItems({ listItem, setListItem }) {
  const [payload, setPayload] = useState({});

  const handlePayload = (key, value) => {
    setPayload({ ...payload, [key]: value });
  }

  // const add = () => {
  //   // setListItem([...listItem, payload]);
  //   listItem.push(payload);
  //   setListItem([...listItem]);
  //   setPayload({});
  // }
  const add = () => {
    setListItem((listItem) => {
      return [...listItem, payload];
    });

    setPayload({});
  }

  const remove = index => {
    listItem.splice(index, 1)
    setListItem([...listItem]);
  };

  const edit = index => {
    const newList = listItem.slice(index, 1)
    setPayload(newList[0]);
    setListItem([...listItem]);
  };

  //   const details =  async () => await getCustomerDetail();
    
  // const sendInvoice = () => {
  //   axios.post('http://localhost:8080/sendEmail', {
  //     billingDetail: payload,
  //     items: listItem,
  //     profileDetail: details()
  //   }
  //   )
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }



  return (
    <ScrollView style={styles.container}>
      <Card>
        <InputBox
          placeholder="Discription"
          required
          value={payload.discription}
          onChangeText={(e) => handlePayload('discription', e)}
        />
        <InputBox
          keyboardType="phone-pad"
          placeholder="Unit Cost"
          required
          value={payload.unitCost}
          onChangeText={(e) => handlePayload('unitCost', e)}
        />
        <InputBox
          placeholder="Quantity"
          keyboardType="decimal-pad"
          value={payload.quantity}
          onChangeText={(e) => handlePayload('quantity', e)}
          onPress={() => Alert.alert('Cannot press this one')}
        />

        <TouchableOpacity
          disabled={!(payload.discription && payload.unitCost && payload.quantity)}
          style={styles.submitButton}
          onPress={
            () => add()
          }>
          <Text style={styles.submitButtonText}> Add </Text>
        </TouchableOpacity>
      </Card>
      <View>

        <View style={styles.list}>
          {listItem.map((item, i) => (
            <ItemCard key={item.discription} item={item} edit={edit} remove={remove} index={i} />
          ))}
        </View>
        {/* <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => sendInvoice()
          }>
          <Text style={styles.submitButtonText}> Send Invoice </Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
}

export default BillingItems;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    width: '90%',
  },
  submitButton: {
    backgroundColor: primary,
    padding: 10,
    marginVertical: 15,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonText: {
    color: 'white'
  },
  list: {
    paddingTop: 10,
    width: '97%',
    paddingLeft: 14,

  }

})
