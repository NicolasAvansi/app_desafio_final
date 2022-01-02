import React, { useState } from "react";
import { Pressable, Text, TextInput, TouchableOpacity, Vibration, View, Keyboard} from "react-native";
import BackButton from "../../components/BackButton";
import PurpleButton from "../../components/PurpleButton";
import styles from "../../components/Styles";
export {passwordList, nameList, emailList}

var passwordList = []
var nameList = []
var emailList = []

export default function Register({navigation}) {
    const[NameRegister, setNameRegister] = useState('')
    const[EmailRegister, setEmailRegister] = useState('')
    const[PasswordRegister, setPasswordRegister] = useState('')
   return (
       <Pressable style={{flex:1, justifyContent:'center'}} onPress={Keyboard.dismiss}>
           <BackButton/>
            <View style={{alignItems:'center'}}>
                <Text style={styles.titleStyle}>Cadastre-se</Text>
                <Text style={{fontSize:14, marginBottom:8, fontWeight:"500", color:'#78746D'}}>Crie uma conta gratuitamente</Text>
                <TextInput style ={styles.inputStyle} onChangeText={(s) => setNameRegister(s)} placeholder="Nome"/>
                <TextInput style ={styles.inputStyle} onChangeText={(s) => setEmailRegister(s)} placeholder="E-mail"/>
                <TextInput style ={styles.inputStyle} onChangeText={(s) => setPasswordRegister(s)} placeholder="Senha"/>
                <TouchableOpacity style={PurpleButton.buttonStyle} onPress={() => {
                    if (NameRegister && EmailRegister && PasswordRegister != '') {
                        passwordList.push(PasswordRegister)
                        emailList.push(EmailRegister)
                        nameList.push(NameRegister)
                        Keyboard.dismiss
                        navigation.navigate('Login')
                    }
                    else{
                        Vibration.vibrate()
                    }
                }}>
                    <Text style={PurpleButton.textStyle}>Cadastre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityStyle} onPress={() => navigation.navigate('Login')}>
                    <Text style={{color:'#78746D', fontWeight:'500', fontSize:14}}>Entrar</Text>
                </TouchableOpacity>
            </View>
       </Pressable>
   ) 
}