import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppFooter = (): React.JSX.Element => {
    const Hello = "Hello TNI Footer";
    const Hello2 = <Text>Hello JXS</Text>;
    const isLogin = true;
    return (
        <View>
            <Text style={styles.myText}>
                {Hello} Date : {new Date().toLocaleDateString()}
            </Text>
            {Hello2}
            {isLogin && <Text>Welcome Boss</Text>}
            {
                isLogin
                ? <Text>Welcome Marry</Text> 
                : <Text>ยังไม่ได้ ล็อคอิน</Text>
            }
        </View>
    )
}

export default AppFooter;


const styles = StyleSheet.create({
    myText: { color: 'red' },
})