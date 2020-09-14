import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import InputBox from './components/inputBox';
import { custmerDetailKey, primary, secondary } from '../theme/constant';

function BillingItems() {
  const [payload, setPayload] = useState({});
  const [listItem, setListItem] = useState([])
  let ghgg = 'hhhh';

  const handlePayload = (key, value) => { 
    setPayload({ ...payload, [key]: value });
  }

  const add = () => {
   setListItem([ ...listItem, payload ])
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
      {listItem.map(item=>
        <View style={styles.row}>
        <Text>{item.discription}</Text>
        <Text>{item.unitCost}</Text>
        <Text>{item.quantity}</Text>
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
    textAlign: 'center',
    backgroundColor: primary,
    padding: 10,
    marginVertical: 15,
    height: 40,
},
submitButtonText: {
    color: 'white'
},
row: {
  display:'flex',
  flexDirection: 'row',
  flex: 1,
  justifyContent: "space-between"
}
})
