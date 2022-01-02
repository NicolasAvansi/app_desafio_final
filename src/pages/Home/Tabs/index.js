import Configuration from "../../Configs";
import Home from "..";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from "../../Profile";
import { Image } from "react-native";

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return(
        <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{paddingBottom:2}, tabBarActiveTintColor:'#82327E'}}> 
            <Tab.Screen name ="Quizzes" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <Image style={{height:20, width:20}} source={require('../../../../assets/QuizzesIcon.png')} tintColor={focused ?'#82327E' :'#BEBAB3'}/>
                )
            }}/>
            <Tab.Screen name= "Perfil" component={Profile} options={{
                tabBarIcon: ({focused}) => (
                    <Image style={{height:20, width:20}} source={require('../../../../assets/ProfileIcon.png')} tintColor={focused ?'#82327E' :'#BEBAB3'}/>
                )
            }}/>
            <Tab.Screen name= "Configs" component={Configuration} options={{
                tabBarIcon: ({focused}) => (
                    <Image style={{height:20, width:20}} source={require('../../../../assets/ConfigurationIcon.png')} tintColor={focused ?'#82327E' :'#BEBAB3'}/>
                )
            }}/>
        </Tab.Navigator>
    )
}
