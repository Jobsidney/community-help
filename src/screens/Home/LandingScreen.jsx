import { View, Text,Image,TouchableOpacity,TouchableWithoutFeedback,TextInput,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import DrawerButton from '../../components/DrawerButton';
import { SearchBar } from 'react-native-elements';
import CategoryIcon from '../../components/CategoryIcon';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import CategoryCard from '../../components/CategoryCard';
type Props = {}

const LandingScreen = (props: Props) => {
    const navigation=useNavigation()
    const [search,setSearch ]=useState('')

    const updateSearch=(search)=>{
        setSearch(search)
    }

    const data={
        title:'Help Them Smile Again',
        description:'Refugees International is committed to saving the lives and protecting the rights, dignity, and security of refugees and displaced people worldwide. Since 1979, Refugees International has used its independent advocacy to improve the rights of all people seeking safety.',
        period: 40,
        days_left: 9,
        Current_Donation:17000,
        target_Donation: 70000,
        campaign_leader:{
            name:'Abah Mukim Foundation',
            verified:true
        },
        


    }
    
  return (
    <SafeAreaView className='bg-white  flex-1 px-4 pt-2  space-y-4 '>
      <View className='flex-row w-full items-center justify-between'>
        <DrawerButton navigation={navigation}/>
        <View>
            <Text className='text-[16px] tracking-widest'>Hello Good People</Text>
        </View>
        <TouchableWithoutFeedback onPress={()=>{}}>
            <Image className='w-[40px] h-[40px] rounded-full' source={{uri:'https://i.pinimg.com/236x/f3/51/21/f35121925403eecec69bc82e573b6dbd.jpg'}}/>
        </TouchableWithoutFeedback>

      </View>
      <View className=' bg-[#da5221] rounded-lg h-[100px] px-2 items-center space-x-3  flex-row'>
            <View className='bg-white rounded-md'>
                <Ionicons  name="heart-sharp" size={44} color="#da5221" />
            </View>
            
           
            <Text className='text-white/80 flex-1  font-semibold text-lg '>No one has ever become poor by giving</Text>
         
     
      </View>
      {/* <View className='flex-row items-center space-x-2 bg-gray-200 pl-2 rounded-md'>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput className='flex-1 h-[40px]' placeholder='search here'/>
      </View> */}
      <View className='flex-col'>
        <Text className='font-bold text-lg tracking-normal mb-3'>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row '>
            <CategoryIcon icon={<Feather name="pen-tool" size={16} color="#da5221"  />}word="Humanity" />
            <CategoryIcon icon={<FontAwesome name="stethoscope" size={16} color="#da5221"/>} word="Health"/>
            <CategoryIcon icon={<Feather name="pen-tool" size={16} color="black" />} word="Education"/>
            <CategoryIcon icon={<Feather name="pen-tool" size={16} color="black" />} word="Education"/>
            <CategoryIcon icon={<Feather name="pen-tool" size={16} color="black" />} word="Education"/>
            <CategoryIcon icon={<Feather name="pen-tool" size={16} color="black" />} word="Education"/>
            <CategoryIcon icon={<Feather name="pen-tool" size={16} color="black" />} word="Education"/>
            <CategoryIcon icon={<Feather name="pen-tool" size={16} color="black" />} word="Education"/>

        </ScrollView>
      </View>
      <ScrollView className='bg-white'>
        <CategoryCard />
        <CategoryCard/>
      </ScrollView>

    </SafeAreaView>
  )
}

export default LandingScreen