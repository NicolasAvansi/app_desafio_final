import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import BackButton from "../../components/BackButton";
import styles from "../../components/Styles";
import { nameList, emailList, passwordList } from "../Register";
import {id} from "../Login"
export default function Configuration() {
   return (
       <View style={{flex:1}}>
        <View style={styles.header}>
            <BackButton/>
            <Text style={styles.headerText}>Configurações</Text>
        </View>
        <Text style={{fontSize:20, fontWeight:'500', position:'absolute', left:'4.5%',marginTop:'30%', marginBottom:'2.5%'}}>
            Informações da conta
        </Text>
        <View style={{flex:1, marginTop:'45%'}}>
            <TouchableOpacity style={styles.configCellContainerStyle}>
                <View style={styles.configImageContainer}>
                    <Image style={styles.configImage} source={require('../../../assets/SettingsInformationIcon.png')}/>
                </View>
                <View style={styles.configTextContainer}>
                    <Text style={styles.configCellTitle}>Nome</Text>
                    <Text style={styles.configCellInfo}>{nameList[id]}</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'flex-end', flex:1, flexDirection:'row', marginRight:'5%'}}>
                    <Image style={styles.nextIconImage} source={require('../../../assets/NextIcon.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configCellContainerStyle}>
                <View style={styles.configImageContainer}>
                    <Image style={styles.configImage} source={require('../../../assets/SettingsInformationIcon.png')}/>
                </View>
                <View style={styles.configTextContainer}>
                    <Text style={styles.configCellTitle}>Foto de perfil</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'flex-end', flex:1, flexDirection:'row', marginRight:'5%'}}>
                    <Image style={styles.nextIconImage} source={require('../../../assets/NextIcon.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configCellContainerStyle}>
                <View style={styles.configImageContainer}>
                    <Image style={styles.configImage} source={require('../../../assets/SettingsInformationIcon.png')}/>
                </View>
                <View style={styles.configTextContainer}>
                    <Text style={styles.configCellTitle}>Email</Text>
                    <Text style={styles.configCellInfo}>{emailList[id]}</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'flex-end', flex:1, flexDirection:'row', marginRight:'5%'}}>
                    <Image style={styles.nextIconImage} source={require('../../../assets/NextIcon.png')}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.configCellContainerStyle}>
                <View style={styles.configImageContainer}>
                    <Image style={styles.configImage} source={require('../../../assets/SettingsInformationIcon.png')}/>
                </View>
                <View style={styles.configTextContainer}>
                    <Text style={styles.configCellTitle}>Senha</Text>
                    <Text style={styles.configCellInfo}>nunca foi alterada</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'flex-end', flex:1, flexDirection:'row', marginRight:'5%'}}>
                    <Image style={styles.nextIconImage} source={require('../../../assets/NextIcon.png')}/>
                </View>
            </TouchableOpacity>
        </View>
       </View>
   ) 
}