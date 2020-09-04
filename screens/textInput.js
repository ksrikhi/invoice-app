import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class UselessTextInput extends Component {
   state = {}
   handlePayload = (key, value) => {
      this.setState({ [key]: value })
   }

   login = () => {
      alert(`payload = ${JSON.stringify(this.state)}`)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Company Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(e) => this.handlePayload('companyName', e)}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Company Adress"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(e) => this.handlePayload('companyAddress', e)}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "City,State & Zip"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Company Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default UselessTextInput

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
   submitButtonText:{
      color: 'white'
   }
})