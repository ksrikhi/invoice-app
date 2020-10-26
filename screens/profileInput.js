import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, AsyncStorage } from 'react-native';
import InputBox from './components/inputBox';
import InputButton from './components/button';
import getCustomerDetail from './components/utill';
import { custmerDetailKey } from '../theme/constant';
import OverlayMessage from './components/overlayBox';

function ProfileForm() {
    const [payload, setPayload] = useState({});
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const details = await getCustomerDetail();
            setPayload(details)
        }
        fetchData();
    }, []);

    const handlePayload = (key, value) => {
        setPayload({ ...payload, [key]: value })
    }


    const save = () => {
        AsyncStorage.setItem(custmerDetailKey, JSON.stringify(payload));
        setProfileData({ type: 'success', message: "profile saved successfully" })
    }

    return (

        <ScrollView style={styles.container}>
            <InputBox
                placeholder="Company Name"
                required
                value={payload.companyName}
                onChangeText={(e) => handlePayload('companyName', e)} />

            {/* <InputBox
                placeholder="Province"
                value={payload.state}
                onChangeText={(e) => handlePayload('state', e)} /> */}

            <InputBox
                placeholder="Email"
                keyboardType="email-address"
                value={payload.email}
                onChangeText={(e) => handlePayload('email', e)} />
            <InputBox
                placeholder="Phone Number"
                keyboardType="number-pad"
                required
                value={payload.phoneNumber}
                onChangeText={(e) => handlePayload('phoneNumber', e)} />

            <InputBox
                placeholder="RT Number"
                value={payload.rtNumber}
                onChangeText={(e) => handlePayload('rtNumber', e)} />

            <InputBox
                placeholder="Company Address"
                value={payload.companyAddress}
                onChangeText={(e) => handlePayload('companyAddress', e)} />

            <InputButton
                disabled={!(payload.companyName && payload.phoneNumber && payload.email)}
                title="Save"
                onPress={
                    () => save()
                }
            >
            </InputButton>

            {profileData ? <OverlayMessage data={profileData} closeOverlay={setProfileData} /> : null}
        </ScrollView>
    )
}

export default ProfileForm

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        width: '80%',
    },
    // submitButton: {
    //     alignContent: 'center',
    //     backgroundColor: primary,
    //     padding: 10,
    //     marginVertical: 15,
    //     height: 40,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    submitButtonText: {
        color: 'white'
    }
})