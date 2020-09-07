import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
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

    
    const login = () => {
        alert(`payload = ${JSON.stringify(payload)}`);
        AsyncStorage.setItem(custmerDetailKey, JSON.stringify(payload));
    }

    return (
        <View style={styles.container}>
            <Text> Company Name  </Text>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Company Name"
                placeholderTextColor={primary}
                autoCapitalize="none"
                value={payload.companyName}
                onChangeText={(e) => handlePayload('companyName', e)} />
             
                <Text> Company Address  </Text>
                <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Company Adress"
                placeholderTextColor={primary}
                autoCapitalize="none"
                value={payload.companyAddress}
                onChangeText={(e) => handlePayload('companyAddress', e)} />
              
                <Text> City, Postal Code</Text>
                <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="City, Postal Code"
                placeholderTextColor={primary}
                autoCapitalize="none"
                value={payload.city}
                onChangeText={(e) => handlePayload('city', e)} />
               
                <Text>Phone Number  </Text>
                 <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Phone Number"
                placeholderTextColor={primary}
                autoCapitalize="none"
                value={payload.phoneNumber}
                onChangeText={(e) => handlePayload('phoneNumber', e)} />
               
                <Text> Province  </Text>
                <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Province"
                placeholderTextColor={primary}
                autoCapitalize="none"
                value={payload.state}
                onChangeText={(e) => handlePayload('state', e)} />

                 <TouchableOpacity
                style={styles.submitButton}
                onPress={
                    () => login()
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
    },
    input: {
        marginVertical: 15,
        height: 40,
        borderColor: primary,
        borderWidth: 1,
        padding: 20,
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