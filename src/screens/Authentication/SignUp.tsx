import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
type Props = {}

const SignUp = (props: Props) => {
    //jigigk
    const navigation=useNavigation()
  return (
    <View className='bg-white flex-1 '>
        <SafeAreaView className='px-4 '>
        <View className='h-[50px] flex-row items-center justify-between'>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
        <View className='px-4 space-y-12'>
            <View>
                <Text className='font-bold text-2xl tracking-wider text-[#da5221] '>Sign In</Text>
                <Text className='tracking-wide'>Refugees International is committed to saving the lives and protecting the rights Refugees International is committed to saving the lives and protecting the rights</Text>
            </View>
            <View className='space-y-3'>
                <TextInput placeholder='Email' keyboardType='email-address' className='bg-[#E6E5E6] rounded-3xl pl-6 py-2'/>
                <TextInput placeholder='Password' keyboardType='email-address' className='bg-[#E6E5E6] rounded-3xl pl-6 py-2'/>
                <TouchableOpacity><Text className='underline font-semibold text-right tracking-wider'>Forgot password?</Text></TouchableOpacity>
            </View>
            <TouchableOpacity className='bg-[#da5221] items-center py-3 rounded-3xl'>
                <Text className='text-white text-[16px] tracking-widest'>Sign In</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})