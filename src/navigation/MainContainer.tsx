import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import SignIn from '../screens/Authentication/SignIn';
import Register from '../screens/Authentication/Register';
import { Ionicons } from '@expo/vector-icons'; 
type Props = {}

const homeScreen='Home';
const accountScreen='Account';
const donationScreen='Donations';

const Tab=createBottomTabNavigator();


const MainContainer = (props: Props) => {
  return (
    <NavigationContainer>
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
                }

                return <Ionicons name={iconName} size={24} color={focused?'tomato':'gray'}/>
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor:'gray',
            tabBarStyle:{
                position:'absolute',
                shadowColor:'black',
             
                // bottom:10,
                // left:10,
                // right:10,
                // elevation:0,
                // backgroundColor:'white',
                // borderRadius: 20,
            
            }
            
        })
    }
    // tabBarOptions={{
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray'
    // }}
    
        


        >
            <Tab.Screen name={homeScreen} component={Home} options={{headerShown: false,}}/>
            <Tab.Screen name={donationScreen} component={SignIn} options={{headerShown: false,}}/>
            <Tab.Screen name={accountScreen} component={Register} options={{headerShown: false,}}/>

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer

