import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomSheet from '../components/BottomSheet'


const DateTimeScreen = () => {
  return (
    <View style={styles.container}>
      <BottomSheet />
    </View>
  )
}

export default DateTimeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})