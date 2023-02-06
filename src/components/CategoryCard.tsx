import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
type Props = {}

const CategoryCard = ({
    id,imageUrl,title,description,period,days_left,Current_Donation,target_Donation,campaign_leader
}) => {

   
    const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('SingleCharity',{
        id,imageUrl,title,description,period,days_left,Current_Donation,target_Donation,campaign_leader
    })} className='bg-white shadow-md mx-1 my-4 rounded-md p-4' style={{shadowColor:'gray'}}>
      <Image className='w-full h-[150px] rounded-md' source={{uri:`${imageUrl}`}}/>
      <Text className='font-bold text-[18px] mb-3 tracking-wider'>Help Them Smile Again</Text>
      <View className='flex-col '>
        <Text className='text-[#c5c5c5]'>Donation raised</Text>
        <View className='flex-row justify-between space-y-2 items-center'>
            <Text className='font-bold text-[#da5221]  text-[18px]'>$52,700</Text>
            <Text className='font-bold text-[#c5c5c5] text-[18px]'>9 Days Left</Text>
        </View>
        
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard

