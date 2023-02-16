import { StyleSheet, Text, View,TouchableOpacity,TextInput,Keyboard,TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import AppLoader from '../../components/AppLoader';
type Props = {}

const SignIn = (props: Props) => {
    //jigigk
    const navigation=useNavigation()
    const[password,setPassword]=useState('')
    const [secure, setSecure] = useState(false);
    const [loadingPending,setLoadingPeddings] = useState(false)
    function handleChange(data) {
        setPassword(data)

     }

  return (
    <View className='bg-white flex-1 '>
        {loadingPending? <AppLoader/>: null}
        <SafeAreaView className='px-4 '>
        <View className='h-[50px] flex-row items-center justify-between'>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Register")}><Text className='font-bold tracking-widest underline '>Register</Text></TouchableOpacity>

            </View>
        </SafeAreaView>
        <View   className='px-4 space-y-12'>
            <View>
                <Text className='font-bold text-2xl tracking-wider text-[#da5221] '>Sign In</Text>
                <Text className='tracking-wide'>Refugees International is committed to saving the lives and protecting the rights Refugees International is committed to saving the lives and protecting the rights</Text>
            </View>
            <View className='space-y-3'>
                <TextInput placeholder='Email' keyboardType='email-address' className='bg-[#E6E5E6] rounded-3xl pl-6 py-2'/>
                <View className='bg-[#E6E5E6] rounded-3xl pl-6 py-2 flex-row items-center'>
                    <TextInput
                    onChangeText={(pass) => handleChange(pass)}
                    placeholder="Password"  
                    className='flex-1 '
                    keyboardType='email-address'
                    secureTextEntry={secure} 
                    />
                    <FontAwesome style={{ paddingRight: 15, }}
                    name={secure ? "eye" : 'eye-slash'}
                    size={20} color='gray' 
                    onPress={() => setSecure(!secure)} />
                </View>
                
                <TouchableOpacity><Text className='underline font-semibold text-right tracking-wider'>Forgot password?</Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=> {
                setLoadingPeddings(true)
                Keyboard.dismiss()}} className='bg-[#da5221] items-center py-3 rounded-3xl'>
                <Text className='text-white text-[16px] tracking-widest'>Sign In</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})