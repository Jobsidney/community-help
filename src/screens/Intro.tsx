import { View, Text,Image, Button,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

type Props = {
    name:string;
}

const IntroPage = (props: Props) => {
  return (
    <SafeAreaView>
    <View className='bg-white relative flex-1 '>
      {/* <Image source={{uri:'https://wallpaperaccess.com/full/6749500.jpg'}} className='h-full w-screen'/> */}
      {/* <View className='absolute  w-full px-7 space-y-2'>
        <Text className='text-4xl tracking-widest  font-bold text-white'>Make</Text>
        <Text className='text-4xl tracking-widest  font-bold text-white'>The World</Text>
        <Text className='text-4xl tracking-widest  font-bold text-white'>Better </Text>
      </View> */}
      <TouchableOpacity className=' px-10 py-2 rounded-3xl z-50 bg-white border-[2px] border-orange-500' >
        <Text className='text-[16px] tracking-wider'>Start to help</Text>
      </TouchableOpacity>
      
     
    </View></SafeAreaView>
  )
}

export default IntroPage