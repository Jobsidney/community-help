import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import SignIn from '../screens/Authentication/SignIn';
import Register from '../screens/Authentication/Register';
import { Ionicons } from '@expo/vector-icons'; 
import SingleCharityScreen from '../screens/Home/SingleCharityScreen';
import PaymentOption from '../screens/Payments/PaymentOption';
import LandingScreen from '../screens/Home/LandingScreen';
type Props = {}

const homeScreen='Home';
const accountScreen='Account';
const donationScreen='Donations';
const bookmark='Fav'

const Tab=createBottomTabNavigator();


const MainContainer = () => {
  return (
        <Tab.Navigator   
        initialRouteName={homeScreen}
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                let rn =route.name
                if(rn===homeScreen){
                    iconName=focused? 'home':'home-outline'
                }else if(rn===accountScreen){
                    iconName=focused? 'person':'person-outline'
                }else if(rn===donationScreen){
                    iconName=focused? 'heart-circle':'heart-circle-outline'
                }else if(rn===bookmark){
                    iconName=focused? 'bookmark':'bookmark-outline'
                }

                return <Ionicons name={iconName} size={24} color={focused?'tomato':'gray'}/>
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor:'gray',
            tabBarStyle:{
                position:'absolute',
                shadowColor:'black',            
            }
            
        })
    }
        >
            <Tab.Screen name={homeScreen} component={LandingScreen} options={{headerShown: false,}}/>
            <Tab.Screen name={donationScreen} component={SignIn} options={{headerShown: false,}}/>
            <Tab.Screen name={bookmark} component={PaymentOption} options={{headerShown: false,}}/>
            <Tab.Screen name={accountScreen} component={Register} options={{headerShown: false,}}/>
            

        </Tab.Navigator>

  )
}

export default MainContainer

