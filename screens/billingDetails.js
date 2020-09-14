import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import InputBox from './components/inputBox';

function BillingDetail() {
    const [payload, setPayload] = useState({});


    const handlePayload = (key, value) => {
        setPayload({ ...payload, [key]: value })
    }
    const send = () => {
      alert( JSON.stringify(payload));
        
    }


    // const save = () => {
    //     AsyncStorage.setItem(custmerDetailKey, JSON.stringify(payload));
    // }

    return (
        <View style={styles.container}>
            <text><b>Billing To:</b></text>
            <InputBox
                placeholder="Client Name"
                value={payload.companyName}
                onChangeText={(e) => handlePayload('clientName', e)} />

            <InputBox
                placeholder="Street Adress"
                value={payload.companyAddress}
                onChangeText={(e) => handlePayload('streetAddress', e)} />

            <InputBox
                placeholder="City, Postal Code"
                value={payload.city}
                onChangeText={(e) => handlePayload('city', e)} />

            <InputBox
                placeholder="Province"
                value={payload.state}
                onChangeText={(e) => handlePayload('state', e)} />


            <InputBox
                placeholder="Phone Number"
                value={payload.phoneNumber}
                onChangeText={(e) => handlePayload('phoneNumber', e)} />

            <InputBox
                placeholder="Email"
                value={payload.email}
                onChangeText={(e) => handlePayload('email', e)} />

          
        </View>
    )
}

export default BillingDetail

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        width: '80%',
    },
   
})