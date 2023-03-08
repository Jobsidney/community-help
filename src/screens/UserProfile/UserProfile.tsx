import { View, Text,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import UserSections from '../../components/UserSections';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
type Props = {}

const UserProfile = (props: Props) => {
    const navigation=useNavigation()
  return (
    <View className='bg-[#EDECEC] flex-1'>
      <SafeAreaView className='flex-1'>
        <View className='w-screen  items-center pr-4 justify-center  flex-row'>
        
            {/* <TouchableOpacity className='' onPress={()=>navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={34} color="black" />
            </TouchableOpacity> */}
            <Text className='upperCase text-lg font-bold  tracking-widest'>Profile</Text>
            
        </View>
        <View className='items-center h-[30%] mt-10'>
            <View className='bg-white w-fit rounded-full p-1'><Image className='w-[100px] h-[100px] rounded-full ' source={{uri:'https://iadsb.tmgrup.com.tr/affd76/0/0/0/0/2048/1365?u=https://idsb.tmgrup.com.tr/2017/10/04/number-of-syrian-refugees-in-turkey-reaches-3208131-1507123492065.jpg'}}/></View>
            <Text className='font-bold text-lg tracking-wider'>Alison Danis</Text>
        </View>
        <View className='bg-white flex-1 h-[50%] flex-col w-screen rounded-t-3xl py-4 px-5 '>
            <View className='border-b-2 pb-2 border-gray-100'>
                <UserSections title={'Edit profile'} icon={<FontAwesome name="user" size={24} color="#E24C85" />} bgC="#E24C85"/>
                <UserSections title={'Settings'} icon={<MaterialIcons name="settings" size={24} color="#F7720F" />} bgC="#F7720F"/>
               
            </View>
            <View className='pt-2 border-gray-200'>
                
                <UserSections title={'Invite a friend'} icon={<FontAwesome5 name="user-plus" size={20} color="black" />} bgC="black"/>
                <UserSections title={'Help'} icon={<MaterialCommunityIcons name="chat-question" size={24} color="black" />}/>
            </View>
            
        </View>
        
      </SafeAreaView>
    </View>
  )
}

export default UserProfile