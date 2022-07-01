import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
    </View>
  )
}

export default EmailScreen

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