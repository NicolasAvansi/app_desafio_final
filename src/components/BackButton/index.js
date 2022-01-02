import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={() => navigation.goBack()}
        style={{
            position:'absolute',
            left:'5%',
            top:'8%',
            borderRadius:90,
            borderWidth:1,
            borderColor: '#BEBAB3',
            width:48,
            height:48,
            justifyContent:'center',
            alignItems:'center',
            marginLeft:0,
        }}>
            <Image
            style={{
                width:6,
                height:12,
            }} 
            source={require('../../../assets/BackButtonIcon.png')}/>
        </TouchableOpacity>
    )
    
}