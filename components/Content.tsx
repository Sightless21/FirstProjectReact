import { View, Text, Alert, Button, StyleSheet } from 'react-native'
import {stylesPractice} from './styles/styles';
import React from 'react'

type ContentPros = {
    fullname: string;
    Massage: string;
}

const Content = ({ fullname,Massage}: ContentPros): React.JSX.Element => {

    const [displayFullname,SetdisplayFullname] = React.useState('');

    const handleButtononClick = () =>{
        SetdisplayFullname(fullname);
        Alert.alert("Hello",`Input your fullname : ${fullname}`);
    }

    const onClickMe = () => {
        Alert.alert("Hello", fullname)
    }

    return (
        <View style={stylesPractice.content}>
            <Text style={stylesPractice.text}>{Massage}</Text>
            <Text style={stylesPractice.text}>{displayFullname}</Text>
            <Button title='CLICK ME' onPress={handleButtononClick}  />
        </View>
    )
}

export default Content