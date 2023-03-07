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
import { FontAwesome5 } from '@expo/vector-icons'; 
import CategoryCard from '../../components/CategoryCard';
import FeaturedRow from '../../components/FeatureRow';
type Props = {}

const LandingScreen = (props: Props) => {
    const navigation=useNavigation()
    const [search,setSearch ]=useState('')
    const updateSearch=(search)=>{
        setSearch(search)
    }
    const data={
        title:'Help Them Smile Again',
        description:'Refugees International is committed to saving the lives and protecting the rights, dignity, and security of refugees and displaced people worldwide. Since 1979, Refugees International has used its independent advocacy to improve the rights of all people seeking safety.  Refugees International is committed to saving the lives and protecting the rights, dignity, and security of refugees and displaced people worldwide. Since 1979, Refugees International has used its independent advocacy to improve the rights of all people seeking safety.',
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
    <View className='flex-1 bg-[white]'>
      <SafeAreaView className='flex-1 pt-4'>
      <View className='mb-4'>
      <View className='flex-row mx-4  items-center justify-between'>

        {/* start of search */}
        <View className=' flex-row items-center space-x-2 bg-[#e7e8ec] pl-2 rounded-3xl w-[80%]'>
          <View className=' rounded-full items-center justify-center'><Ionicons name="search" size={20} color="gray" /></View> 
          <TextInput className='flex-1 h-[37px]' placeholder='Search for causes'/>
          
        </View>

          <TouchableOpacity onPress={()=>{console.log('hello');}} className='rounded-full   p-1 border border-gray-300'>
            <Ionicons name="notifications" size={20} color="black" />
              
          </TouchableOpacity>
      </View>
      {/* <View className=' pt-4'>
    
      <Image className='w-[40px] h-[40px]rounded-full' source={{uri:'https://i.pinimg.com/236x/f3/51/21/f35121925403eecec69bc82e573b6dbd.jpg'}}/>
      
        
      </View> */}
      </View>
      
    <View className='  flex-1 px-4   space-y-4 '>
      

      <ScrollView  showsVerticalScrollIndicator={false} className='space-y-2 mb-16'>
      <View className='flex-row items-center rounded-2xl border border-gray-300 basis-[100%]'> 
        <View className=' basis-[70%] bg-[#1F2D36] rounded-2xl flex-row items-center space-x-3   -mr-2 h-[90px] pl-6'>
          <View>
            <FontAwesome5 name="money-bill-wave" size={24} color="white"  />
          </View>
          <View className='space-y-1'>
            <Text className='text-white/60'>Your donation level</Text>
            <Text className='text-white text-2xl font-bold'>$ 340,898</Text>
          </View>
        </View>
        <View className='basis-[30%] h-full border-l-0 flex-col items-center justify-center  rounded-r-2xl'>
          <Text className='font-bold'>Maximized?</Text>
          <Ionicons name="checkmark-circle" size={24} color="black" />
        </View>
      </View>

      <View className='flex-col  sticky top-0 z-44'>
        {/* <Text className='font-bold text-lg tracking-normal mb-3'>Categories</Text> */}
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
      <View className=' space-y-2'>
        <FeaturedRow title={'Urgent Fundraising'} description={'View All'}/>
        <FeaturedRow title={'Favourite'} description={'View All'}/>
        <FeaturedRow title={'Near You'} description={'View All'}/>
      </View></ScrollView>

    </View></SafeAreaView></View>
  )
}
//hey
export default LandingScreen