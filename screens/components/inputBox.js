import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { primary, secondary } from '../../theme/constant';

function InputBox({ placeholder, value, onChangeText, required}) {
  const [backgroundColor, setBackgroundColor] = useState(primary);
  const [errorMessage , setErrorMessage]= useState('');
  
  const onBlur= () => {
    if (required && !value) {
      setErrorMessage(`${placeholder} is required `);
    } else {
      setErrorMessage('');
    }
  }

  return (
    <>
      <Text>{placeholder}</Text>
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
        onChangeText={onChangeText}
         />
         {/* {errorMessage && <Text>{errorMessage}</Text>} */}
      </>
  );
}

export default InputBox;
