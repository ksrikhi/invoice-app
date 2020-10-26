import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import InputBox from './components/inputBox';

function BillingDetail({ payload, setPayload }) {
  
    const handlePayload = (key, value) => {
        setPayload({ ...payload, [key]: value });
    }

    return (
        <ScrollView style={styles.container}>
            <Text>Billing To:</Text>
            <InputBox
                placeholder="Client Name"
                value={payload.companyName}
                onChangeText={(e) => handlePayload('clientName', e)} />

            <InputBox
                placeholder="client Address"
                value={payload.companyAddress}
                onChangeText={(e) => handlePayload('streetAddress', e)} />

            <InputBox
                placeholder="Phone Number"
                keyboardType="number-pad"
                maxLength={10}
                value={payload.phoneNumber}
                onChangeText={(e) => handlePayload('phoneNumber', e)} />

            <InputBox
                placeholder="Email"
                keyboardType="email-address"
                value={payload.email}
                onChangeText={(e) => handlePayload('email', e)} />

                <InputBox
                placeholder="Invoice Number"
                value={payload.invoiceNumber}
                onChangeText={(e) => handlePayload('invoiceNumber', e)} />          
        </ScrollView>
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