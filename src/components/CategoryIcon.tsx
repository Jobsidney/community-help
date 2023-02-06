import { View, Text,Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
type Props = {}

const CategoryIcon = ({action,icon,word}) => {

    return(
    <View className='bg-[#F4F4F6] flex-row m-1 mr-3 items-center space-x-1 px-3 py-1  rounded-lg'>
        <TouchableOpacity className='flex-row  items-center space-x-1 px-2 py-1  rounded-lg'>
            {icon}
            <Text className='text-black font-semibold'>{word}</Text>
        </TouchableOpacity>     

    </View>
    )
}
export default CategoryIcon;