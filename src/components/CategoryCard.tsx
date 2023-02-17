import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Progress from 'react-native-progress';

type Props = {}

const CategoryCard = ({
    id,imageUrl,title,description,period,days_left,Current_Donation,target_Donation,campaign_leader
}) => {

   
    const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('SingleCharity',{
        id,imageUrl,title,description,period,days_left,Current_Donation,target_Donation,campaign_leader
    })} className='bg-white relative  shadow-md   w-[200px] h-[250px] mr-4 rounded-2xl ' style={{shadowColor:'gray'}}>
      <View className='absolute z-50 bg-green-900 rounded-md ml-4 px-2 py-1  flex-row items-center -mt-4 space-x-1'><Ionicons name="location-outline" size={12} color="white" /><Text className='text-white font-bold tracking-widest text-xs'>India</Text></View>
      <Image className='w-full h-[50%] rounded-t-2xl' source={{uri:`${imageUrl}`}}/>
      <View className='absolute bottom-[53%] bg-[#6B6762]/70 rounded-3xl px-2 py-[1] ml-2'>
        <Text className='text-white font-bold tracking-widest text-xs'>Disastor</Text>

      </View>
      <View className='flex-col pt-3 space-y-3 px-3 '>
          {/* <Text className='text-[#c5c5c5]'>Donation raised</Text> */}
          <Text className='font-bold   mb-2 tracking-wider'>Help Them Smile Again</Text>
          {/* <Text className='font-light text-black  text-xs'>$52,700 raised from $70,000 total</Text> */}
          <Progress.Bar progress={0.8} width={180} height={4} color={'#1F2D36'} unfilledColor={'#EBEBEB'} borderColor="transparent" />
          <View className='flex-row   items-center  justify-between space-x-4'>

            <Text className=' text-[#48BA81] font-bold tracking-wide text-xs '>$23,400</Text>
            <Text className=' text-black/60 text-xs '>31 days Left</Text>           
          </View>
          
        </View>
      
    </TouchableOpacity>
  )
}

export default CategoryCard

