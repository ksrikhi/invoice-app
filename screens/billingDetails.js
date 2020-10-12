import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import InputBox from './components/inputBox';

function BillingDetail({ payload, setPayload }) {
  
    const handlePayload = (key, value) => {
        setPayload({ ...payload, [key]: value })
    }

    return (
        <View style={styles.container}>
            <Text>Billing To:</Text>
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
                keyboardType="number-pad"
                value={payload.phoneNumber}
                onChangeText={(e) => handlePayload('phoneNumber', e)} />

            <InputBox
                placeholder="Email"
                keyboardType="email-address"
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