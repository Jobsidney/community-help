import { View, Text,Image, Button,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
type Props = {
    name:string;
}

const IntroPage = () => {
  const navigation=useNavigation()
  function renderItem ({item}){
    return (
      <View>
      <Image className='w-[250px] h-[250px]' source={require('../../assets/d5211c2fbd71b98046bb31bd292d5323-removebg-preview.png')}/>
    </View>
    );
}
const carouselItems=[
  {
    item:'../../assets/d5211c2fbd71b98046bb31bd292d5323-removebg-preview.png',
    descr:'not at all1'
  },
  {
    item:'../../assets/d5211c2fbd71b98046bb31bd292d5323-removebg-preview.png',
    descr:'not at all3'
  },
  {
    item:'../../assets/d5211c2fbd71b98046bb31bd292d5323-removebg-preview.png',
    descr:'not at all2'
  }

 
]
  return (
    <SafeAreaView className='bg-white  flex-1 px-4  items-center justify-around'>
    
      <View className='flex-row items-center' >
        <Image className='w-16 h-16' source={require('../../assets/56-566337_helping-hands-clip-art-social-work-removebg-preview.png')}/>
        <View className='flex-row'>
          <Text className='text-2xl text-[#EA470A]'>H</Text>
          <Text className='text-2xl text-black'>-Hand</Text>
        </View>
      </View>
      
      
      <View>
        <Image className='w-[250px] h-[250px]' source={require('../../assets/d5211c2fbd71b98046bb31bd292d5323-removebg-preview.png')}/>
      </View>

      <View className='flex-col w-full space-y-2'>
      <TouchableOpacity  className='  bg-[#EA470A]  w-full py-3 items-center rounded-3xl'>
          <Text className='text-[16px] tracking-wider text-white'>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}  className=' border-[#EA470A] border-[2px] w-full py-2 items-center rounded-3xl'>
          <Text className='text-[16px] tracking-wider text-black'>Start to help</Text>
        </TouchableOpacity>
        </View>

        
     
      
     
    </SafeAreaView>
  )
}

export default IntroPage