import { View, Text,Image, Button,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import IntroPage from '../Intro';
import LandingScreen from './LandingScreen';
type Props = {
    name:string;
}
const Drawer = createDrawerNavigator();
const Home = (props: Props) => {
    const MyTheme = {
        colors: {
          primary: 'rgb(255, 45, 85)',
          background: 'rgb(242, 242, 242)',
          card: 'rgb(255, 255, 255)',
          text: 'rgb(28, 28, 30)',
          border: 'rgb(199, 199, 204)',
          notification: 'rgb(255, 69, 58)',
        },
      };
    return(

        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                backgroundColor: 'white',
                width: 240,
                },
            }}
        >
            <Drawer.Screen
                name="LandingScreen"
                component={LandingScreen}
                options={{
                    headerShown: false,
                }}       
            />
        </Drawer.Navigator>
        
    )
}

export default Home