import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import { Card } from 'react-native-elements';
import InputBox from './components/inputBox';
import { custmerDetailKey, primary, secondary } from '../theme/constant';
import ItemCard from './components/itemCard';

function BillingItems({ theme }) {
  const [payload, setPayload] = useState({});
  const [listItem, setListItem] = useState([])

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
    listItem([]);
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <InputBox
          placeholder="Discription"
          required=' (required)'
          value={payload.discription}
          onChangeText={(e) => handlePayload('discription', e)}
        />
        <InputBox
        unitCost= 'Number'
          placeholder="Unit Cost"
          value={payload.unitCost}
          onChangeText={(e) => handlePayload('unitCost', e)}
        />
        <InputBox
          placeholder="Quantity"
          value={payload.quantity}
          onChangeText={(e) => handlePayload('quantity', e)}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => add()
          }>
          <Text style={styles.submitButtonText}> Add </Text>
        </TouchableOpacity>
      </Card>
      <View>
        <View>
        </View>

        {listItem.map((item, i) => (
          <ItemCard key={item.discription} item={item} edit={edit} remove={remove} index={i} />
        ))}

      </View>
    </ScrollView>
  );
}

export default BillingItems;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    width: '80%',
  },
  submitButton: {
    alignContent: 'center',
    backgroundColor: primary,
    padding: 10,
    marginVertical: 15,
    height: 40,
    justifyContent: 'center'
  },
  submitButtonText: {
    color: 'white'
  }
})
