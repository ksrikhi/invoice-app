import React, { useState } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { primary, secondary } from '../../theme/constant';

function InputBox({ placeholder, value, required, ...rest}) {
  const [backgroundColor, setBackgroundColor] = useState(primary);
  const [errorMessage , setErrorMessage]= useState('');
  
  const onBlur= () => 
    setErrorMessage(required && !value ? `${placeholder} is required ` : '');

  return (
    <>
      <Text style={styles.item}>{placeholder}</Text>
      <TextInput
        style={{ 
          width: '100%',
          marginVertical: 15,
          height: 40,
          borderWidth: 2,
          borderRadius: 2,
          paddingHorizontal: 5,
          borderColor: backgroundColor}}
        onFocus={()=> setBackgroundColor(secondary)}
        onBlur={()=> { setBackgroundColor(primary); onBlur();}}
        autoCapitalize="none"
        placeholderTextColor={primary}
        placeholder={placeholder}
        value={value}
        {...rest}
         />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </>
  );
}

export default InputBox;

const styles = StyleSheet.create({
error: {
  color: 'red',
  marginTop:-12,
  marginBottom:10
},
  item: { 
    marginBottom:-9,  
  }
})