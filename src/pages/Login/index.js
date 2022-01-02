import React from "react";
import { Easing, Pressable, Text, TextInput, TouchableOpacity, Vibration, View, Keyboard } from "react-native";
import styles from "../../components/Styles";
import PurpleButton from "../../components/PurpleButton";
import { useState } from "react";
import { passwordList, nameList, emailList } from "../Register";
import { useNavigation } from "@react-navigation/native";
export {id}

var id = -1

export default function Login() {
    const[NameLogin, setNameLogin] = useState('')
    const[EmailLogin, setEmailLogin] = useState('')
    const[PasswordLogin, setPasswordLogin] = useState('')
    const navigation = useNavigation()
   return (
       <Pressable onPress={Keyboard.dismiss}>
            <View style = {{marginTop:258, alignItems:'center'}}>
                <Text style={styles.titleStyle}>Entrar</Text>
                <TextInput style={styles.inputStyle} placeholder="E-mail" onChangeText={(s)=>{setEmailLogin(s)}}/>
                <TextInput style = {styles.inputStyle} placeholder="Senha" onChangeText={(s)=>{setPasswordLogin(s)}}/>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => navigation.navigate('Perdi a Senha')}>
                    <Text style={styles.opacityStyleText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PurpleButton.buttonStyle} onPress={() =>{
                            if (emailList.includes(EmailLogin) && passwordList.includes(PasswordLogin)) {
                                if (emailList.indexOf(EmailLogin) == passwordList.indexOf(PasswordLogin)) {
                                    navigation.reset({
                                        index:0,
                                        routes:[{name: 'Tela Principal'}]
                                    })
                                    id = emailList.indexOf(EmailLogin)
                                }
                            }
                            else{
                                Vibration.vibrate()
                            }
                }}>
                    <Text style ={PurpleButton.textStyle}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                    <Text style={styles.opacityStyleText}>Criar uma conta</Text>
                </TouchableOpacity>
            </View>
    </Pressable>
   ) 
}