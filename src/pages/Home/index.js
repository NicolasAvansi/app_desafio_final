import React, { useEffect, useState } from "react";
import { Keyboard, Text, View, Pressable, Image } from "react-native";
import { nameList } from "../Register";
import { id } from "../Login";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../components/Styles";
import CourseCard from "../../components/CourseCard";

const courses =[
    {
        id:1,
        title: 'UI',
        subtitle: 'Questões sobre interface',
        description: 'Visitar quiz de HTML básico para ver quiz igual ao do figma',
        image: require('../../../assets/Image1.png'),
        difficulty:'Fácil',
        questionQuantity:'2'
    },
    {
        id:2,
        title: 'HTML Básico',
        subtitle: 'Teste seus conhecimentos em tags básicas...',
        description:'You can launch a new career in web develop- ment today by learning HTML & CSS. You dont need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust.',
        image: require('../../../assets/Image2.png'),
        difficulty: 'Fácil',
        questionQuantity:'1'
    },
    {
       id:3,
       title: 'HTML e CSS',
       subtitle:'Usando estilos inline no HTML',
       description: 'Visitar quiz de HTML básico para ver quiz igual ao do figma',
       image: require('../../../assets/Image3.png'),
       difficulty:'Fácil', 
       questionQuantity:'2'
    },
    {
        id:4,
        title: 'Scrum',
        subtitle:'Advanced project organization course',
        description: 'Visitar quiz de HTML básico para ver quiz igual ao do figma',
        image: require('../../../assets/Image5.png'),
        difficulty:'Fácil', 
        questionQuantity:'2'
    },
    {
        id:5,
        title: 'Swift',
        subtitle:'Advanced iOS apps',
        description: 'Visitar quiz de HTML básico para ver quiz igual ao do figma',
        image: require('../../../assets/Image4.png'),
        difficulty:'Fácil', 
        questionQuantity:'2'
    }
]

export default function Home() {
    const [listCourses, setListCourses] = useState(courses)
    const [filterSearch, setFilterSearch] = useState(null)
    const [found, setFound] = useState(false)

    useEffect(()=>{
        if (filterSearch == null) {
            setListCourses(courses)
        } else {
            setListCourses(courses.filter((item) => item.title.toLocaleLowerCase().indexOf(filterSearch.toLocaleLowerCase()) > -1))
        }
    }, [filterSearch])
   return (
       <Pressable style ={{marginTop:30}} onPress={Keyboard.dismiss}>
           <Text style={{fontSize:16, fontWeight:'400', marginLeft:'5%', marginTop:19}}>Hello, </Text>
           <Text style={{fontSize:32, fontWeight:'700', marginLeft:'5%'}}>{nameList[id]}</Text>
           <View style={{alignItems:'center'}}>
                <TextInput style={{marginVertical:16, height:56, borderWidth:1, borderColor:'#BEBAB3', borderRadius:12, width:'90%', padding:16}} placeholder="Pesquisar quiz" value={filterSearch} onPressIn={() => setFilterSearch(null)} onChangeText={(s) => setFilterSearch(s)}/>
                <View style={styles.chooseCategoriesStyle}>
                    <TouchableOpacity style={styles.tagstyle} onPress={() => {setFilterSearch('HTML'); Keyboard.dismiss;}}>
                        <Text style={styles.tagTextStyle}>#HTML</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagstyle} onPress={() => {setFilterSearch('UX'); Keyboard.dismiss}}>
                        <Text style={styles.tagTextStyle}>#UX</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagstyle} onPress={() => {setFilterSearch('Swift'); Keyboard.dismiss}}>
                        <Text style={styles.tagTextStyle}>#Swift</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagstyle} onPress={() => {setFilterSearch('UI'); Keyboard.dismiss}}>
                        <Text style={styles.tagTextStyle}>#UI</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {listCourses.length != 0 ?
            <FlatList
                showsVerticalScrollIndicator={false}
                data={listCourses}
                style={{height:'73%'}}
                renderItem={({ item }) => <CourseCard data={item}
                keyExtractor={(item) => item.id}/>}
                />
            : <View style={{height:'73%', marginTop:'15%'}}>
                <Image style={{width:375, height:253}} source={require('../../../assets/NotFoundImage.png')}/>
                <Text style={{fontSize:24, fontWeight:'500', color:'#3C3A36', alignSelf:'center', marginTop:'5%'}}>Quiz não encontrado</Text>
                <Text style={{fontSize:14, fontWeight:'400', color:'#78746D', alignSelf:'center', marginTop:'2.5%', width:'80%', textAlign:'center'}}>Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes...</Text>
            </View>
            }
       </Pressable>
   ) 
}