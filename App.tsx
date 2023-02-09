import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroPage from './src/screens/Intro';
import LandingScreen from './src/screens/Home/Home';
import SingleCharityScreen from './src/screens/Home/SingleCharityScreen';
import PaymentOption from './src/screens/Payments/PaymentOption';
import MpesaPaymentPage from './src/screens/Payments/MpesaPaymentPage';
import SignUp from './src/screens/Authentication/SignUp';
import Welcome from './src/screens/Authentication/Welcome';

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
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}       
        />
        <Stack.Screen
          name="SingleCharity"
          component={SingleCharityScreen}
          options={{
            headerShown: false,
          }}       
        />
         <Stack.Screen
          name="PaymentOption"
          component={PaymentOption}
          options={{
            headerShown: false,
          }}       
        />
        <Stack.Screen
          name="MpesaPaymentOption"
          component={MpesaPaymentPage}
          options={{
            headerShown: false,
          }}       
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}       
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}       
        />
        </Stack.Navigator>
       
        <StatusBar />
      </NavigationContainer>
  
  );
}

