import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
type Props = {}

const CategoryCard = ({
    id,imageUrl,title,description,period,days_left,Current_Donation,target_Donation,campaign_leader
}) => {

   
    const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('SingleCharity',{
        id,imageUrl,title,description,period,days_left,Current_Donation,target_Donation,campaign_leader
    })} className='bg-white relative  shadow-md   w-[250px] h-[250px] mr-4 rounded-md ' style={{shadowColor:'gray'}}>
      <View className='absolute z-50 bg-green-900 rounded-md ml-3 px-2 py-1  flex-row items-center -mt-4 space-x-1'><Ionicons name="location-outline" size={12} color="white" /><Text className='text-white font-bold tracking-widest text-xs'>India</Text></View>
      <Image className='w-full h-[80%] rounded-t-md' source={{uri:`${imageUrl}`}}/>
      <View className='absolute bottom-[20%] px-1 w-full'>
        <Text className='font-bold text-[20px] text-white mb-3 tracking-wider'>Help Them Smile Again</Text>

      </View>
      <View className='flex-col w-full space-y-1 pl-1 '>
          {/* <Text className='text-[#c5c5c5]'>Donation raised</Text> */}
          <Text className='font-light text-black  text-xs'>$52,700 raised from $70,000 total</Text>
          <View className='flex-row   items-center space-x-4 w-full'>
            <View className='flex-row items-center space-x-1'>
              <Ionicons name="md-people-outline" size={12} color="black" />
                <Text className=' text-black text-xs '>250 people</Text>
            </View>

            <View className='flex-row items-center'>
              <Ionicons name="ios-time-outline" size={12} color="black" />
              <Text className=' text-black text-xs '>9 days Left</Text>
            </View>
              
              
          </View>
          
        </View>
      
    </TouchableOpacity>
  )
}

export default CategoryCard

