import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'; 
import Payment from '../../components/Payment';
type Props = {}

const PaymentOption = (props: Props) => {


    const navigation=useNavigation()
  return (
    <View className='bg-[#FAFAFA]    flex-1'>
        <SafeAreaView className='px-4 space-y-2 flex-1'>
            <View className='h-[50px] flex-row items-center justify-between'>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={32} color="black" />
                </TouchableOpacity>
                <Text className='text-[16px] font-semibold'>
                    Payment
                </Text>
                <TouchableOpacity >
                </TouchableOpacity>

            </View>
            <View className=''>
                <Payment image="https://o.remove.bg/downloads/9dae6586-f110-489a-9280-19ea348a3fca/paypal-logo-11609371786gw3pnuakfe-removebg-preview.png"/>

                <Payment image={'https://o.remove.bg/downloads/a16a10c1-b3a0-4012-a1fd-23fe9fcce19a/MClogo-c823e495c5cf455c89ddfb0e17fc7978-removebg-preview.png'}/>

                <Payment image={'https://o.remove.bg/downloads/d9e76dcb-3041-43f3-94d8-5528bd6544b9/1200px-M-PESA_LOGO-01.svg-removebg-preview.png'}/>

            </View>
            </SafeAreaView>
            </View>
  )
}

export default PaymentOption

const styles = StyleSheet.create({})