import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackButton from "../../components/BackButton";
import PurpleButton from "../../components/PurpleButton";
import styles from "../../components/Styles";


export default function Results({route}) {
    let data = route.params?.data
    let score = route.params?.score
    let quiz = route.params?.quiz
    let nailedIt = false
    const navigation = useNavigation()
    if (score == quiz[0].questions.length) {
        nailedIt = true
    }
   return (
       <View style={{flex:1, justifyContent:'flex-end'}}>
           <View style={styles.header}>
               <BackButton/>
               <Text style={styles.headerText}>Resultados</Text>
           </View>
           <View style={{alignItems:'center', height:'64%', marginBottom:'52%', justifyContent:'flex-end'}}>
               <Text style={styles.resultScoreStyle}>{score}/{quiz[0].questions.length}</Text>
               <Text style={styles.resultMessageStyle}>{nailedIt? 'Você é um mestre!' : 'Quase lá...'}</Text>
               <Text style={styles.resultSubMessageStyle}>{nailedIt? 'Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!' : 'Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!'}</Text>
           </View>
           <View style={{height:'15%', justifyContent:'center', justifyContent:'flex-end', paddingBottom:'8%'}}>
           <TouchableOpacity style={PurpleButton.buttonStyle} 
           onPress={()=>{
            navigation.navigate('Sobre o Quiz', {data:data})
           }}>
               <Text style={PurpleButton.textStyle}>Finalizar</Text>
           </TouchableOpacity>
           </View>
       </View>
   ) 
}