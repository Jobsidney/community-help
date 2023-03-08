import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
type Props = {}

const UserSections = ({icon,path,title,bgC}) => {
    const navigation=useNavigation()
  return (
    <View className={`flex-row justify-between my-2`}>
      <View className='flex-row items-center space-x-4'>
        <View className={`py-2 px-3 bg-[${bgC}] rounded-lg`}>{icon}</View>
        <Text className='font-bold text-md tracking-wide'>{title}</Text>
      </View>
      <TouchableOpacity className='' onPress={()=>navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
      </TouchableOpacity>
    </View>
  )
 
}


export default UserSections