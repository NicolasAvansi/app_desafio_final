import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Quizzes } from "../../components/QuizQuestions";
import BackButton from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "../../components/Styles";
import PurpleButton from "../../components/PurpleButton";

export default function QuizPage({ route }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [alreadyAnswered, setAlreadyAnswered] = useState(false)
    const [rightQuestion, setRightQuestion] = useState(0)
    const [ended, setEnded] = useState(false)
    const navigation = useNavigation()
    let data = route.params?.data
    let quiz = Quizzes.filter(item => (item.key == data.title))
   return (
       <View style ={{flex:1}}>
           <View style={styles.header}>
               <BackButton/>
           </View>
           <View style={{flex:1, justifyContent:'center'}}>
               <Text style={styles.quizCounter}>{currentQuestion + 1} de {quiz[0].questions.length}</Text>
               <Text style={styles.questionTextStyle}>{quiz[0].questions[currentQuestion].QuestionText}</Text>
               <View style={styles.testQuestionImageContainer}>
               <Image source={data.image} style={styles.testQuestionImage}/>
               </View>
               {quiz[0].questions[currentQuestion].answers.map((option) =>{
                   const [currentStyle, setCurrentStyle] = useState(styles.testOptionStandardContainer)
                   const [RightStyle, setRightStyle] = useState(styles.testRightOptionContainer)
                   const [wrongStyle, setWrongStyle] = useState(styles.testWrongOptionContainer)
                   return(
                   <TouchableOpacity key={option.Text}style={currentStyle} 
                   onPress={() =>{
                        if (!alreadyAnswered) {
                            if (option.IsCorrect == true) {
                                setRightQuestion(rightQuestion + 1)
                                setAlreadyAnswered(true)
                                setCurrentStyle(RightStyle)
                                setTimeout(() => {
                                    if (currentQuestion +1 < quiz[0].questions.length) {
                                        setCurrentQuestion(currentQuestion +1)
                                        setAlreadyAnswered(false)
                                        setCurrentStyle(styles.testOptionStandardContainer)
                                    }
                                }, 1500);
                            }
                            else if (option.IsCorrect == false){
                                setAlreadyAnswered(true)
                                setCurrentStyle(wrongStyle)
                                setTimeout(() => {
                                    if (currentQuestion +1 < quiz[0].questions.length) {
                                        setCurrentQuestion(currentQuestion +1)
                                        setAlreadyAnswered(false)
                                        setCurrentStyle(styles.testOptionStandardContainer)
                                    }
                                }, 1500);
                            }
                        }
                        if (currentQuestion+1 >= quiz[0].questions.length) {
                            setEnded(true)
                        }
                   }}>
                       <Text>{option.Text}</Text>
                   </TouchableOpacity>
                   )}
               )}
           </View>
           {ended ?
                <View style={{height:'15%', justifyContent:'center'}}>
                <TouchableOpacity style={PurpleButton.buttonStyle} onPress={()=>{navigation.navigate('Resultados', {data:data, quiz:quiz, score:rightQuestion})}}>
                   <Text style={PurpleButton.textStyle}>Continuar</Text>
               </TouchableOpacity>
                </View>
                :
                <View style={{height:'15%', justifyContent:'center'}}/>
               }
       </View>
   ) 
}