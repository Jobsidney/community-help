import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
type Props = {}

const AppLoader = (props: Props) => {
  return (
    <View style={[StyleSheet.absoluteFillObject,styles.container]} >
      <LottieView style={{
         width: 100,
         height: 100,
      }} source={require('../../assets/95494-double-loader.json')} autoPlay loop/>
    </View>
  )
}

export default AppLoader

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex:1
    }
})