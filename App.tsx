import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Intro';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroPage from './src/screens/Intro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={IntroPage}
          options={{
            headerShown: false,
          }}       
        /></Stack.Navigator>
       
        <StatusBar />
      </NavigationContainer>
  
  );
}

