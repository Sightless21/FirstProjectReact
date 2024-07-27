import { StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding: 20,
        backgroundColor: "#9CA986"
    },
    profileImage:{
        borderRadius: 50,
        width:100,
        height:100,
        marginRight:20,
    },
    profileContainer:{
        flexDirection: "row",
        alignItems: "center",
        width : "100%",
        padding : 20,
        borderRadius: 10,
        backgroundColor: "#C9DABF",
        elevation : 5,
        marginTop : 30
    },
    TextName : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#5F6F65'
    }
});

export default styles