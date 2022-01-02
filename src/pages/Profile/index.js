import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import BackButton from '../../components/BackButton'
import styles from "../../components/Styles";

export default function Profile() {
    const navigation = useNavigation()
   return (
       <View>
            <View style={styles.header}>
                <BackButton/>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={{marginTop:'35%', justifyContent:'center', alignItems:'center'}}>
                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImage} source={require('../../../assets/ProfileImage.png')}/>
                </View>
                <TouchableOpacity style={styles.menuItem}>
                   <Text style={styles.menuItemText}>Seu histórico</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate('Sobre o app')}>
                   <Text style={styles.menuItemText}>Sobre o app</Text> 
                </TouchableOpacity>
            </View>
        </View>
   ) 
}