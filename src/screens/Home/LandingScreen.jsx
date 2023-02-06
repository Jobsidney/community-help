import { View, Text,Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
type Props = {}

const LandingScreen = (props: Props) => {
    const navigation=useNavigation()
    
  return (
    <SafeAreaView className='bg-white  flex-1 px-4 pt-2  items-center '>
      <View className='flex-row w-full items-center justify-between'>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Ionicons name="reorder-three" size={34} color="black" />
        </TouchableOpacity>
        <View>
            <Text className='text-[16px] tracking-widest'>Hello Good People</Text>
        </View>
        <TouchableWithoutFeedback onPress={()=>{}}>
            <Image className='w-[40px] h-[40px] rounded-full' source={{uri:'https://i.pinimg.com/236x/f3/51/21/f35121925403eecec69bc82e573b6dbd.jpg'}}/>
        </TouchableWithoutFeedback>

      </View>
    </SafeAreaView>
  )
}

export default LandingScreen