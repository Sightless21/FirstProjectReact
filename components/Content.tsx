import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesPractice } from "../styles/styles";

interface ContentProps {
  message: string;
  //fullname: string;
  onButtonClick: () => void // stating the return type
}
const Content = ({ message, onButtonClick }: ContentProps) => {

  const [displayFullname, setDisplayFullname] = useState('');

// const handleButtonClick = () => {
//   setDisplayFullname(fullname);
//   Alert.alert(`Hello, Input your fullname: ${fullname}`);
// };

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button title="Click Me" 
      onPress={onButtonClick}/>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({});
