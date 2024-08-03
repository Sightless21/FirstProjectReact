import { StyleSheet, Text, View } from 'react-native'
import {stylesPractice} from './styles/styles';
import React from 'react'

type AppFooterPros = {
    University: string;
}

const AppFooter = ({ University }: AppFooterPros): React.JSX.Element => {
    const Hello = { University };
    const Hello2 = <Text>Hello JXS</Text>;
    const isLogin = true;
    return (
        <View style={stylesPractice.footer}>
            <Text style={stylesPractice.footerText}>
                {University}
            </Text>
        </View>
    )
}

export default AppFooter;
