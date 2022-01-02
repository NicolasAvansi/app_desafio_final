import React from "react";
import { View, Text, Image } from "react-native";
import BackButton from "../../components/BackButton";
import styles from "../../components/Styles";

export default function AboutApp(params) {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <View style={styles.header}>
                <BackButton/>
                <Text style={styles.headerText}>Sobre o app</Text>
            </View>
            <View>
                <Image style={{width:150, height:150}} source={require('../../../assets/PixelQuizImage.png')}/>
            </View>
            <Text style={styles.aboutTitle}>PixelQuizzes</Text>
            <View style={{width:'90%'}}>
                <Text style={styles.aboutText}>O PixelQuizzes é um aplicativo criado para facilitar o aprendizado de conteúdos que nem sempre são os melhores de se aprender. Através da nossa plataforma, prometemos facilitar a sua aprendizagem em conceitos dos mais variados tipos. Isso se dá pelo fato de usarmos uma metodologia inovadora para aprendizagem!</Text>
            </View>
        </View>
    )
}