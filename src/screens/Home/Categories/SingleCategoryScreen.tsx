import { View, Text,FlatList,ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Header from '../../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import SingleCategoryCard from '../../../components/SingleCategoryCard'

type Props = {}

const SingleCategoryScreen = () => {
    const {params:{
        word,data
    }}=useRoute()
  return (
    <View className='bg-[#e7e8ec] flex-1'>
      <Header word={word}/>
      <View className='flex-1'>
        <ScrollView className='py-4'>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
          <SingleCategoryCard/>
        </ScrollView>
        

      </View>
    </View>
  )
}

export default SingleCategoryScreen