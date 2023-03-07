import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

type Props = {}

const Header = ({word}) => {
    const navigation=useNavigation()
  return (
    <View className='bg-red-900 h-20 w-screen items-center justify-between pt-4 flex-row'>
     
      <TouchableOpacity className='' onPress={()=>navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={34} color="white" />
      </TouchableOpacity>
      <Text className='upperCase text-lg font-bold text-white tracking-widest'>{word}</Text>
      <View></View>
    </View>
  )
}

export default Header