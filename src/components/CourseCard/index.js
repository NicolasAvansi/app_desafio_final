import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import styles from "../Styles";

export default function CourseCard({ data }) {
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={styles.CourseCardContainer} onPress={() => {navigation.navigate('Sobre o Quiz', {data:data})}}>
            <Image source={data.image} style={{width:'100%', height:'60%', marginVertical:8, resizeMode:'contain'}}/>
            <View style={{alignSelf:'flex-end'}}>
            <View style={styles.tagstyle}>
                <Text style={styles.tagTextStyle}>{data.difficulty}</Text>
            </View>
            </View>
            <Text style={{fontSize:24, fontWeight:'500', color:'#3C3A36', marginLeft:8}}>{data.title}</Text>
            <Text style={{fontWeight:'400', fontSize:14, color:'#3C3A36', marginLeft:8, marginTop:4}}>{data.subtitle}</Text>
        </TouchableOpacity>
    )
}