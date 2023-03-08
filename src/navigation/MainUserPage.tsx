import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from '../screens/UserProfile/UserProfile';
import MainUserHomePage from '../screens/UserProfile/MainUserHomePage';
type Props = {}
const Stack = createNativeStackNavigator();
const MainUserPage = (props: Props) => {
  return (
    <Stack.Navigator>
      
        
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            headerShown: false,
          }}       
        />
        <Stack.Screen
          name="UserMainProfile"
          component={MainUserHomePage}
          options={{
            headerShown: false,
          }}       
        />
        </Stack.Navigator>
        
  )
}

export default MainUserPage