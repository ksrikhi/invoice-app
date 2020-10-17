import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Platform } from 'react-native';
import { Card } from 'react-native-elements';
import InputBox from './components/inputBox';
import InputButton from './components/button';
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
    const newList = listItem.slice(index, 1);
    setListItem(listItem);
    setPayload(newList[0]);
  };

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
          keyboardType="decimal-pad"
          placeholder="Unit Cost"
          required
          value={payload.unitCost}
          onChangeText={(e) => handlePayload('unitCost', e)}
        />
        <InputBox
          placeholder="Quantity"
          keyboardType="phone-pad"
          value={payload.quantity}
          onChangeText={(e) => handlePayload('quantity', e)}
        />

        <InputButton
          disabled={!(payload.discription && payload.unitCost && payload.quantity)}
          onPress={
            () => add()}
          label="Add"
        >
        </InputButton>

        {/* <TouchableOpacity
          disabled={!(payload.discription && payload.unitCost && payload.quantity)}
          style={styles.submitButton}
          onPress={
            () => add()
          }>
          <Text style={styles.submitButtonText}> Add </Text>
        </TouchableOpacity> */}
      </Card>
      <View style={styles.list}>
        {Platform.OS !== 'web' ? listItem.map((item, i) => (
          <ItemCard key={item.discription} item={item} edit={edit} remove={remove} index={i} />
        )) : listItem.map((item, i) => (
          <View key={item.discription}>
            <Text>{item.discription}</Text>
            <Text>{item.unitCost}</Text>
            <Text>{item.quantity}</Text>
            <Text onPress={remove}>remove</Text>
            <Text onPress={edit}>edit</Text>
          </View>
        ))
        }
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
