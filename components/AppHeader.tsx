import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type AppHeaderProps = {
    Username: string;
    Massage: string;
}

const AppHeader = ({ Username,Massage}: AppHeaderProps): React.JSX.Element => {

    return (
        <View style={style.header}>
            <Text style={style.headerText}>{Username}</Text>
            <Text style={style.subtitleText}>{Massage}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: '#AEC6CF',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitleText: {
        fontSize: 16,
        color: '#fff',
    },
});
export default AppHeader