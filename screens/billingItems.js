import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import { Card } from 'react-native-elements';
import InputBox from './components/inputBox';
import { custmerDetailKey, primary, secondary } from '../theme/constant';
import { Icon } from 'react-native-elements'

function BillingItems() {
  const [payload, setPayload] = useState({});
  const [listItem, setListItem] = useState([])

  const handlePayload = (key, value) => {
    setPayload({ ...payload, [key]: value });
  }

  const add = () => {
    // setListItem([...listItem, payload]);
    listItem.push(payload);
    setListItem([...listItem]);
    setPayload({})
  }

  const remove = index => {
    listItem.splice(index, 1)
    setListItem([...listItem]);
  };

  const edit = index => {
    const newList= listItem.slice(index,1)
    setPayload(newList[0])
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title>CARD WITH DIVIDER</Card.Title>
        <InputBox
          placeholder="Discription"
          value={payload.discription}
          onChangeText={(e) => handlePayload('discription', e)}
        />
        <InputBox
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

          <View style={{
            flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between", marginTop: 10,
          }}>
            <Text style={{ marginLeft: 20, width: 345 }}>Discription</Text>
            <Text style={{ width: 300 }}>Unit cost</Text>
            <Text style={{ width: 250 }}>Quantity</Text>
          </View>
        </View>


        {listItem.map((item, index) =>
          <View key={item.index} style={styles.row}>
            <Text style={{ width: 485 }}>{item.discription}</Text>
            <Text style={{ width: 400 }}>{item.unitCost}</Text>
            <Text style={{ width: 205 }}>{item.quantity}</Text>
            <View style={styles.icon} key={index} >
              <Icon
                onPress={() => remove(index)}
                raised
                name='delete'
                color='#f50' />

              <Icon
              onPress={() => edit(index)}
                raised
                name='edit'
                color='#f50' />

            </View>
          </View>
        )}

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
  },
  submitButtonText: {
    color: 'white'
  },
  row: {
    marginTop: 10,
    borderWidth: 2,
    paddingLeft: 15,
    borderLeftWidth: 3,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-between"
  },
  icon: {
    shadowOffset: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
})
