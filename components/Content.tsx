import { View, Text, Alert, Button, StyleSheet } from 'react-native'
import React from 'react'

type ContentPros = {
    Username: string;
    Massage: string;
}

const Content = ({ Username,Massage}: ContentPros): React.JSX.Element => {

    const onClickMe = () => {
        Alert.alert("Hello", Username)
    }

    return (
        <View style={style.content}>
            <Text style={style.text}>{Massage}</Text>
            <Button title='CLICK ME' onPress={onClickMe} />
        </View>
    )
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },

})
export default Content