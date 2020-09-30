import React, { useState } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { primary, secondary } from '../../theme/constant';

function InputBox({ placeholder, value, onChangeText}) {
  const [backgroundColor, setBackgroundColor] = useState(primary);
  
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
        onBlur={()=> setBackgroundColor(primary)}
        autoCapitalize="none"
        placeholderTextColor={primary}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
         />
      </>
  );
}

export default InputBox;
