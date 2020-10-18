import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { primary } from '../../theme/constant';


function InputButton({ title, disabled, label, ...rest }) {
    return (
            <Button
                title={title}
                disabled={disabled}
                {...rest}
                buttonStyle={{
                    backgroundColor: disabled ? "gray" : primary,
                    padding: 10,
                    marginVertical: 15,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...rest.style,
                }}
            />
    )
}
export default InputButton;


const styles = StyleSheet.create({
    submitButtonText: {
        color: 'white'
    }
})