import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackButton from "../../components/BackButton";
import PurpleButton from "../../components/PurpleButton";
import styles from "../../components/Styles";

export default function QuizDetail({ data, route }) {
    const navigation = useNavigation()
    data = route.params?.data
   return (
        <View style ={{ flex:1, justifyContent:'space-between'}}>
                <View style={styles.header}>
                    <BackButton/>
                    <Text style={styles.headerText}>{data.title}</Text>
                </View>
            <View style={{marginHorizontal:'10%', justifyContent:'center', marginTop:'35%'}}>
                    <Image style={{width:375, height:257, marginHorizontal:2}} source={require('../../../assets/ImageAbout.png')}/>
                    <View style={{alignSelf:'flex-end'}}>
                        <View style={styles.tagstyle}>
                                <Text style={styles.tagTextStyle}>{data.difficulty}</Text>
                        </View>
                    </View>
                <Text style={{fontSize:24, fontWeight:'500', color:'#3C3A36', marginTop:24, marginBottom:4}}>Sobre o quiz</Text>
                <Text style={styles.descriptionStyle}>{data.description}</Text>
                <Text style={{fontSize:20, fontWeight:'500', color:'#3C3A36', marginBottom:4, marginTop:20}} >Quantidade de perguntas</Text>
                <Text style={{fontSize:14, fontWeight:'400', color:'#3C3A36'}}>{data.questionQuantity}</Text>
            </View>
            <View style={{width:'100%', justifyContent:'flex-end', height:'20%', paddingBottom:'10%'}}>
                <TouchableOpacity style={PurpleButton.buttonStyle} onPress={() =>{navigation.navigate('Página do Quiz',{ data:data })}}>
                        <Text style={PurpleButton.textStyle}>Fazer tentativa</Text>
                    </TouchableOpacity>
            </View>
        </View>
   ) 
}