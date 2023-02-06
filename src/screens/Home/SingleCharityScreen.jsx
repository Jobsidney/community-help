import React from 'react'
import { View, Text,Image,TouchableOpacity,TouchableWithoutFeedback,TextInput,ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
type Props = {}

function SingleCharityScreen() {
    const {params:{
        id,imageUrl,title,description,period,days_left,Current_Donation,target_Donation,campaign_leader
    }}=useRoute()
    const navigation=useNavigation()
  return (
    <View>
        <Text>Hello {title}</Text>
    </View>
  )
}

export default SingleCharityScreen