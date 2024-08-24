import { Alert, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

type User = {
    name: string
    email: string
}

const AxiosPostData = () => {

    const [formData,setFormData] = useState({name:'',email:''});

    const handleInputChange = (key:string,value:string) => {
        setFormData(prevState => ({...prevState,[key]:value}));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users',formData);
            Alert.alert('User Created',
                `
                Id: ${response.data.id}
                Name: ${response.data.name}
                Email: ${response.data.email}`,
            );
        } catch {
            Alert.alert(`Error`,'Fail to create user')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={formData.name}
                onChangeText={value => handleInputChange('name', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={formData.email}
                onChangeText={value => handleInputChange('email', value)}
            />
            <Button title="Create User" onPress={handleSubmit} />
        </View>
    )
}

export default AxiosPostData

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        marginTop: 50
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },

})