import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { stylesPractice } from './styles/styles'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
        <TextInput 
        style = {styles.input}
        placeholder='Enter name'/>
        <TextInput 
        style = {styles.input}
        placeholder='Enter Email'/>
        <Button title='Submit'/>
      </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 20,
        marginTop: 50,
        backgroundColor: '#ffffff', // ต้งัค่าสีพ้ืนหลงัเป็นสีขาว
        borderRadius: 10, // เพิ่มความมนให้กบัขอบคอนเทนเนอร์
        elevation: 3, // เพิ่มเงาให้กบัคอนเทนเนอร์(เฉพาะ Android)
        width: '95%', // ต้งัความกวา้งของ container ให้เต็มหน้าจอ
        },
        input: {
        height: 45, // เพิ่มความสูงของ TextInput
        borderColor: "gray", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
        borderWidth: 1,
        borderRadius: 8, // เพิ่มความมนให้กบัขอบ TextInput
        marginBottom: 15, // เพิ่มระยะห่างดา้นล่างระหวา่ ง TextInput
        paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
        backgroundColor: "#f9f9f9", // ต้งัค่าสีพ้ืนหลงัของ TextInput
        }
});