import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { primary } from '../../theme/constant';


function InputButton ({ disabled,label, ...rest}) {
return (
    <>
<Button
disabled={disabled}
{...rest}
style={{
    backgroundColor: disabled? "gray":primary,
    padding: 10,
    marginVertical: 15,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...rest.style,
}}
>
<Text style={styles.submitButtonText}>{label}</Text>
</Button>

</>
)}
export default InputButton;


const styles = StyleSheet.create({
    submitButtonText: {
        color: 'white'
    }
})