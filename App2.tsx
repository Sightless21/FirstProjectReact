import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylesPractice } from "./styles/styles";
import { useEffect, useState } from "react";

export default function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai-Nichi-Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  // This runs whenever the fullname changes
  useEffect(() => {
    console.log(` Fullname has changed to: ${fullname}`);
  }, [fullname]);

  const handleButtonClick = () => {
    Alert.alert(`Hello, Input your fullname: ${fullname}`);
  }

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message} />
      {/* <Content message={message} fullname={fullname} /> */}
      <Content message={message} onButtonClick = {handleButtonClick} /> 
      
      <TextInput
        style={stylesPractice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      />
      <AppFooter footerMessage={footerMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "flex-start"
  },
});
