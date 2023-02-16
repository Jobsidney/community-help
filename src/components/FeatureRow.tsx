import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { Ionicons } from '@expo/vector-icons'; 

const FeaturedRow = ({title,description,featuredCategory,id}) => {


  const [dishes,setDishes]=useState([])
  useEffect(()=>{
    
  },[])
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
    <View>
      <View className='mt-4 flex-row items-center justify-between mb-1 '>
        <Text className='font-bold text-[20px] tracking-wider'>{title}</Text>
        <View className='flex-row items-center '>
            <Text className='  text-[#da5221] text-md font-bold tracking-widest '>{description}</Text>
            {/* <Ionicons name="arrow-forward-sharp" size={18} color="#3979DB" /> */}
        </View>
        
      </View>
      
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
        paddingVertical:15
        
      }}
      showsHorizontalScrollIndicator={false}
      className='pt-2'
      >

        <CategoryCard title={data.title} description={data.description} imageUrl="https://plan-uk.org/sites/default/files/Images/Syrian%20refugee%20child%20waves%20during%20school.png" period={data.period} days_left={data.days_left} Current_Donation={data.Current_Donation} target_Donation={data.target_Donation} campaign_leader={data.campaign_leader}/>
        <CategoryCard title={data.title} description={data.description} imageUrl="http://d3e1m60ptf1oym.cloudfront.net/181b54ab-1799-4b3f-a10b-117375f299a2/Brett-Cole-India-07489_xgaplus.jpg" period={data.period} days_left={data.days_left} Current_Donation={data.Current_Donation} target_Donation={data.target_Donation} campaign_leader={data.campaign_leader}/>
        <CategoryCard title={data.title} description={data.description} imageUrl="https://media.istockphoto.com/id/896282868/photo/indian-rural-school-kids-learning-from-books-in-the-classroom.jpg?s=612x612&w=0&k=20&c=ML7fNAtUK1wuJLqGajGms8zvTKCZZq41Hh8Q_o5ZaEU=" period={data.period} days_left={data.days_left} Current_Donation={data.Current_Donation} target_Donation={data.target_Donation} campaign_leader={data.campaign_leader}/>
     
        
        
        

      </ScrollView>
    </View>
  )
}

export default FeaturedRow