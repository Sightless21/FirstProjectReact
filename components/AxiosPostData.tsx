import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosPostData = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (key: string, value: string) => {
    setFormData(prevState => ({...prevState, [key]:value}));

  };

  const handleSubmit = async () => {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", formData);
        Alert.alert('User Created',
            `ID: ${response.data.id}
            name: ${response.data.name}
            Email: ${response.data.email}`
        );
    } catch {
        Alert.alert('Error', 'Failed to creat user')
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
};

export default AxiosPostData;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
