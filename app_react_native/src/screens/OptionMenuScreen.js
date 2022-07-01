import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OptionMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
    </View>
  )
}

export default OptionMenuScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#CAE9FF",   
  },
  text:{
    fontSize:25,
    textTransform:"uppercase"
  }
})