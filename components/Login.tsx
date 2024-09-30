import { View, Alert, TextInput, Button } from "react-native";
import React from "react";
import { stylesLogin } from "../styles/styles";
import { useState } from "react";
import ProfileScreen from "../components/ProfileScreen";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pp, setPP] = useState("");


  const validateEmail = (email:string):boolean => {
    // \S+ means non-whitespace char with at least one char
    // @ means @
    // \S+ means the same thing, just after @
    // \. means .
    // /S+ means the same thing, just after .
    // say if you replace \S+ with xxx it might be easier to understand >> xxx@xxx.xxx >> email pattern!
    const recheckEmail = /\S+@\S+\.\S+/;
    return recheckEmail.test(email); // a function exclusively to js and ts

  }

  const handleSubmit = () => {
    let errorMessage = "";

    if (!name) {
        errorMessage +="Please Enter Name\n";
    }
    if (!email) {
        errorMessage +="Please Enter Email\n";
    } else if (!validateEmail(email)) {
        errorMessage += "Invalid Email Format\n"
    }

    // password form check
    if(!pp) {
        errorMessage += "Please Enter Password"
    } else if (pp.length < 6 ) {
        errorMessage += "The password must be at least 6 characters"
    }

    if(errorMessage) {
        Alert.alert("Error", errorMessage.trim(), [{text: "OK"}]);
        return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
  };
  return (
    <View>
      <ProfileScreen />

      <View style={[stylesLogin.container, {}]}>
        <TextInput
          style={stylesLogin.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={stylesLogin.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
        style = {stylesLogin.input}
        placeholder= "Enter Password"
        secureTextEntry = {true}
        value={pp}
        onChangeText={setPP}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default Login;
