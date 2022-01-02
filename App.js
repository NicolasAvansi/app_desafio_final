import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import LostPassword from './src/pages/LostPassword';
import Tabs from './src/pages/Home/Tabs';
import QuizDetail from './src/pages/QuizDetail';
import QuizPage from './src/pages/QuizPage';
import Results from './src/pages/Results';
import AboutApp from './src/pages/AboutApp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark'/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Register} />
        <Stack.Screen name="Perdi a Senha" component={LostPassword} />
        <Stack.Screen name="Tela Principal" component={Tabs} />
        <Stack.Screen name='Sobre o Quiz' component={QuizDetail}/>
        <Stack.Screen name='Página do Quiz' component={QuizPage}/>
        <Stack.Screen name='Resultados' component={Results}/>
        <Stack.Screen name='Sobre o app' component={AboutApp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
