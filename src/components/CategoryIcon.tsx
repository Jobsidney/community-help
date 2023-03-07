import { View, Text,Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
type Props = {}

const CategoryIcon = ({action,icon,word,data}) => {
    const navigation=useNavigation()
    return(
    <View className='flex-col m-1 mr-3 items-center space-x-1  p-1 justify-center  rounded-lg'>
        <TouchableOpacity onPress={()=>{navigation.navigate('SingleCategory',{
        word,data
    })}} className='flex-col bg-[#addacd] w-[50px] h-[50px]  items-center justify-center  rounded-full'>
            {icon}    
        </TouchableOpacity> 
        <Text className='text-xs '>{word}</Text>    

    </View>
    )
}
export default CategoryIcon;