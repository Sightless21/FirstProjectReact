import { View, Text, StyleSheet } from 'react-native'
import {stylesPractice} from './styles/styles';
import React from 'react'

type AppHeaderProps = {
    fullname: string;
    Massage: string;
}

const AppHeader = ({ fullname,Massage}: AppHeaderProps): React.JSX.Element => {

    return (
        <View style={stylesPractice.header}>
            <Text style={stylesPractice.headerText}>Input your fullname : {fullname}</Text>
            <Text style={stylesPractice.subtitleText}>{Massage}</Text>
        </View>
    )
}


export default AppHeader