import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
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
      <Image className='w-full h-[150px] rounded-md' source={{uri:'https://i.pinimg.com/236x/f3/51/21/f35121925403eecec69bc82e573b6dbd.jpg'}}/>
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

// <Progress.Bar progress={0.7} width={320} color={'#da5221'} unfilledColor={'#F4F4F6'} borderColor="white" />
// <View className='flex-row justify-between space-y-4 items-center'>
//   <View className='flex-row'>
//       <Text className='font-bold'>$52,700</Text>
//       <Text className='text-[#A4A4A4]'>/70,000</Text>
//   </View>
//   <Text className='font-bold'>82%</Text>
// </View>