import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Welcome = (props: Props) => {
  return (
    <View className='bg-white flex-1 justify-between'>
      <View className=' h-[50%]'>

      </View>
      <View className='bg-[#da5221] h-[40%]  rounded-t-[50px] p-8 space-y-3'>
        <Text className='text-black font-bold text-2xl uppercase'>Welcome</Text>
        <Text className='text-white'>Refugees International is committed to saving the lives and protecting the rights, dignity, and security of refugees and displaced people worldwide.</Text>
        
        <View className='flex-row justify-between'>
            <View className='bg-black w-[100px] py-2 rounded-3xl'>
                <Text className='text-white w-full text-center'>Sign Up</Text>
            </View>

            <View className='bg-white w-[100px] py-2 rounded-3xl'>
                <Text className='text-black w-full text-center'>Login</Text>
            </View>
        </View>

      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})