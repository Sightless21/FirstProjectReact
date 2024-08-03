import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,

} from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import { stylesPractice } from './components/styles/styles';
import React,{useState,useEffect} from 'react';

export default function App(): React.JSX.Element /* <<<=== Must have to make ure ths app can use Typescript */ {
  
  const [fullname,Setfullname] = useState("");
  const [massage,Setmassage] = useState("Message form App.txs");
  const [footer,SetfooterMassage] = useState("Thai-Nichi Institute of Technology");

  useEffect(() => {
    console.log("Component has mounted");
  },[]);

  useEffect(() => {
    console.log(`Fullname has changed to : ${fullname}`);
  },[fullname]);

  return ( /* render JXS and typescript */
    <View style={styles.container}>
      <AppHeader Massage={massage} fullname = {fullname}/>
      <Content Massage = {massage} fullname = {fullname}/>
      <StatusBar style="auto" />
      <AppFooter University={footer} />
      <TextInput 
        style = {stylesPractice.input}
        placeholder='Enter your fullname'
        value={fullname}
        onChangeText={Setfullname} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
