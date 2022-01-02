import React from "react";
import { Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import BackButton from "../../components/BackButton";
import PurpleButton from "../../components/PurpleButton";
import styles from "../../components/Styles";

export default function LostPassword() {
   return (
       <View style={{flex:1, justifyContent:'center'}}>
           <BackButton/>
           <View style ={{alignItems:'center'}}>
                <Text style={styles.titleStyle}>Recuperar senha</Text>
                <TextInput placeholder="Digite seu endereço de e-mail" style={styles.inputStyle}/>
                <TouchableOpacity style={PurpleButton.buttonStyle}>
                    <Text style={PurpleButton.textStyle}>Enviar e-mail</Text>
                </TouchableOpacity>
           </View>
       </View>
   ) 
}