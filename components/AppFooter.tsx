import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type AppFooterPros = {
    University: string;
}

const AppFooter = ({ University }: AppFooterPros): React.JSX.Element => {
    const Hello = { University };
    const Hello2 = <Text>Hello JXS</Text>;
    const isLogin = true;
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                {University}
            </Text>
        </View>
    )
}

export default AppFooter;


const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#f8f8f8',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },

    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});