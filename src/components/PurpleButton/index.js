import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const PurpleButton = StyleSheet.create({
    buttonStyle:{
        borderRadius:16,
        backgroundColor:'#82327E',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        height:56,
        marginVertical:8,
        alignSelf:'center'
    },
    textStyle:{
      color:'white',
      fontWeight:'500',
      fontSize:16
    }
})

export default PurpleButton