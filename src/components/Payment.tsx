import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
type Props = {}

const Payment = ({image}) => {
    const navigation=useNavigation()
    //MpesaPaymentOption
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('MpesaPaymentOption')} className=' bg-[#E7E7E7] h-[60px] rounded-md px-3 my-2 flex-row items-center justify-between'>
            <Image className='w-[100px] h-[60px] rounded-full ' source={{uri:image}}/>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />

        </TouchableOpacity>
    )
}

export default Payment

const styles = StyleSheet.create({})