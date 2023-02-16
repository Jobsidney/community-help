import { View, Text,Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
type Props = {}

const DrawerButton = ({navigation}) => {
    
    return(
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Ionicons name="reorder-three" size={34} color="white" />
        </TouchableOpacity>
    )
}

export default DrawerButton