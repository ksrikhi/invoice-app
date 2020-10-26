import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';

const OverlayMessage = ({ data , closeOverlay }) => {
  const {type, message} = data || {};
  return (
    <View style={styles.container}> 
      <Overlay isVisible={!!data} onBackdropPress={() => closeOverlay(null)}>
          <Text style={{color: type === 'error'? 'red' : 'green'}}>{message}</Text> 
      </Overlay>
    </View>
  )
};

export default OverlayMessage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});