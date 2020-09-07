import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';

const PERSISTENCE_KEY = 'Custmer_Detail';

function ProfileForm() {
    const [payload, setPayload] = useState({});

    useEffect(async () => {
        try {
            let custmerDetail = await AsyncStorage.getItem(PERSISTENCE_KEY);
            if (custmerDetail){
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

    const login = () => {
        alert(`payload = ${JSON.stringify(payload)}`);
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(payload));
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Company Name"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                value={payload.companyName}
                onChangeText={(e) => handlePayload('companyName', e)} />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Company Adress"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                value={payload.companyAddress}
                onChangeText={(e) => handlePayload('companyAddress', e)} />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="City,Zip"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={(e) => handlePayload('city', e)} />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Phone Number"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={(e) => handlePayload('phoneNumber', e)} />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="state"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={(e) => handlePayload('state', e)} />

            <TouchableOpacity
                style={styles.submitButton}
                onPress={
                    () => login()
                }>
                <Text style={styles.submitButtonText}> save </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileForm

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        flex: 1,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        padding: 20,
        width: '100%'
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})