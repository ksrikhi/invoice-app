import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';

const OverlayMessage = ({ resData, setResData }) => {

  return (
    <View style={styles.container}> 
      <Overlay isVisible={!!resData} onBackdropPress={() => setResData(null)}>
          <Text style={{color: resData.type === 'error'? 'red' : 'green'}}>{resData.message}</Text> 
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