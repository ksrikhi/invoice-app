import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import InputBox from './components/inputBox';
import { custmerDetailKey, primary, secondary } from '../theme/constant';

function ProfileForm() {
    const [payload, setPayload] = useState({});

    useEffect(async () => {
        try {
            let custmerDetail = await AsyncStorage.getItem(custmerDetailKey);
            if (custmerDetail) {
                setPayload(JSON.parse(custmerDetail));
            }

        }
        catch (error) {
            alert(error);
        }
    }, []);

    const handlePayload = (key, value) => {
        setPayload({ ...payload, [key]: value })
    }


    const save = () => {
        AsyncStorage.setItem(custmerDetailKey, JSON.stringify(payload));
    }

    return (
        <View style={styles.container}>
            <InputBox
                placeholder="Company Name"
                value={payload.companyName}
                onChangeText={(e) => handlePayload('companyName', e)} />

            <InputBox
                placeholder="Company Adress"
                value={payload.companyAddress}
                onChangeText={(e) => handlePayload('companyAddress', e)} />

            <InputBox
                placeholder="City, Postal Code"
                value={payload.city}
                onChangeText={(e) => handlePayload('city', e)} />

            <InputBox
                placeholder="Phone Number"
                value={payload.phoneNumber}
                onChangeText={(e) => handlePayload('phoneNumber', e)} />

            <InputBox
                placeholder="Province"
                value={payload.state}
                onChangeText={(e) => handlePayload('state', e)} />

            <TouchableOpacity
                style={styles.submitButton}
                onPress={
                    () => save()
                }>
                <Text style={styles.submitButtonText}> Save </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileForm

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
    }
})