import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import { stylesPractice } from './styles/styles'
import React, { useEffect, useState } from 'react'

const Login = (): React.JSX.Element => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const validateEmail = (email : string): boolean => {
    const reCheckEmail = /\S+@\S+\.\S+/
    return reCheckEmail.test(email);
  }

  const handleSubmit= () => {

    let  errormassage = "";
    if(!name){
      /* Alert.alert("Alert",`Please Enter Name`,[{text: 'OK'}]); */
      errormassage += "Please Enter Name\n";
    }if(!email){
      /* Alert.alert("Alert",`Please Enter Email`,[{text: 'OK'}]); */
      errormassage += "Please Enter Email\n";
    }else if(!validateEmail(email)){
      errormassage += "Invalid email Format\n";
    }

    if(!password){
      /* Alert.alert("Alert",`Please Enter Password`,[{text: 'OK'}]); */
      errormassage += "Please Enter Password\n";
    }else if(password.length <= 6){
      Alert.alert("Alert",`Password must be 6 Character\n`);
    }
    
    if(errormassage){
      Alert.alert("Error",errormassage.trim(),[{ text: "OK"}]);
      return;
    }
    Alert.alert("Alert","Success",[{ text: "OK"}]);
  }

  return (
    <View style={stylesPractice.containerLogin}>
        <TextInput style = {stylesPractice.inputLogin} placeholder='Enter Name' onChangeText={setName}></TextInput>
        <TextInput style = {stylesPractice.inputLogin} placeholder='Enter Email' onChangeText={setEmail}></TextInput>
        <TextInput style = {stylesPractice.inputLogin} placeholder='Enter Password' onChangeText={setPassword} secureTextEntry></TextInput>
        <Button title='Submit' onPress={handleSubmit}/>
    </View>
  )
}

export default Login;