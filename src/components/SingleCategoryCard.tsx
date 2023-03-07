import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

type Props = {}

const SingleCategoryCard = (props: Props) => {
  return (
    <TouchableOpacity className='py-2 border-y border-black/20 px-2 flex-row'>
        <Image className='w-[50px] h-[50px] rounded-md ' source={{uri:'https://iadsb.tmgrup.com.tr/affd76/0/0/0/0/2048/1365?u=https://idsb.tmgrup.com.tr/2017/10/04/number-of-syrian-refugees-in-turkey-reaches-3208131-1507123492065.jpg'}}/>
      <Text>SingleCategoryCard</Text>
    </TouchableOpacity>
  )
}

export default SingleCategoryCard