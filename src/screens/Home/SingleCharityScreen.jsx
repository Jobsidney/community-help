import React from 'react'
import { View, Text,Image,TouchableOpacity,TouchableWithoutFeedback,TextInput,ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import * as Progress from 'react-native-progress';

type Props = {}

function SingleCharityScreen() {

    const {params:{
        id,imageUrl,title,description,period,days_left,Current_Donation,target_Donation,campaign_leader
    }}=useRoute()
    const navigation=useNavigation()
  return (
    <View className='bg-[#FAFAFA]    flex-1'><ScrollView showsVerticalScrollIndicator={false} >
        <View className='relative'>
            <Image className='w-[100%] h-[300px] opacity-80 ' source={{uri:imageUrl}}/>
                <TouchableOpacity className='absolute top-10 left-4 bg-black/50 rounded-full h-[35px] w-[35px]' onPress={()=>navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className='absolute top-10 right-4 items-center justify-center bg-black/50 rounded-full h-[35px] w-[35px]' onPress={()=>{}}>
            
                    <Ionicons name="share-social" size={24} color="white" />
                </TouchableOpacity>

                <Text className='absolute bottom-2 left-2 text-white font-bold text-[20px]  tracking-wider'>{title}</Text>
        </View>
        
        <View className='px-4 space-y-2 flex-1'>
            {/* <View className='h-[50px] flex-row items-center justify-between'>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={32} color="black" />
                </TouchableOpacity>
                <Text className='text-[16px] font-semibold'>
                    Details
                </Text>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons  name="heart-outline" size={32} color="black" />
                </TouchableOpacity>

            </View> */}
            
                
            <View className='pt-2 space-y-4 flex-1 mb-4'>
            
            
            {/* <Text className='font-bold text-[#da5221] text-[16px] mb-8'>9 Days Left</Text> */}

            <View className='bg-[white] space-y-3'>
            
            <Progress.Bar progress={0.8} width={300} color={'#da5221'} unfilledColor={'#EBEBEB'} borderColor="transparent" />
                <View className='flex-row justify-between'>
                    
                    <View className='flex-row justify-between space-y-2 items-center'>
                        <View className='flex-row'>
                            <Text className='font-bold text-[16px]'>${Current_Donation}</Text>
                            <Text className='text-[#A4A4A4] text-[16px]'>/{target_Donation}</Text>
                        </View>
                    
                    </View>
                    <Text className='font-bold text-[16px] text-[#da5221]'>82%</Text>

                </View>
                <View className='flex-row items-center justify-between'>
                   
                    
                </View>
            </View>

            <View>
                <Text className='text-[#707070] tracking-wide leading-5'>{description}</Text>
            </View>

            <View className='space-y-3 mb-4'>
                <Text className='font-bold tracking-widest'>Campaign By</Text>
            <View className=' bg-[#E7E7E7] rounded-lg h-[80px] px-2 items-center space-x-3  flex-row'>
                <Image className='w-[50px] h-[50px] rounded-full ' source={{uri:'https://iadsb.tmgrup.com.tr/affd76/0/0/0/0/2048/1365?u=https://idsb.tmgrup.com.tr/2017/10/04/number-of-syrian-refugees-in-turkey-reaches-3208131-1507123492065.jpg'}}/>
                <View>
                    <Text className='text-black  font-semibold text-md '>{campaign_leader.name}</Text>
                    <View className='flex-row justify-between'>
                    <Text className='text-[#da5221] font-semibold text-sm '>{campaign_leader.verified? "verified user":""}</Text><MaterialIcons name="verified-user" size={20} color="green" /></View>
                </View>
            </View></View>
            <TouchableOpacity onPress={()=>{navigation.navigate('PaymentOption')}} className='bg-black items-center py-3  rounded-md'>
                <Text className='text-[16px] text-white tracking-widest'>Donate Now</Text>
            </TouchableOpacity>


            {/* text area */}

        </View>
            
        </View>
       
        </ScrollView>
    </View>
  )
}

export default SingleCharityScreen

{/* <View className='bg-[white] p-3  shadow-sm ' style={{shadowColor:'#c5c5c5'}}>
<View className='flex-row justify-between'>
    <Text className='text-black font-bold text-[16px]'>Donation raised</Text>
    <View className='flex-row justify-between space-y-2 items-center'>
        <View className='flex-row'>
            <Text className='font-bold text-[16px]'>${Current_Donation}</Text>
            <Text className='text-[#A4A4A4] text-[16px]'>/{target_Donation}</Text>
        </View>
    
    </View>
</View>
<View className='flex-row items-center justify-between'>
    <Progress.Bar progress={0.8} width={260} color={'#da5221'} unfilledColor={'#EBEBEB'} borderColor="transparent" />
    <Text className='font-bold text-[16px] text-[#da5221]'>82%</Text>
</View>
</View> */}