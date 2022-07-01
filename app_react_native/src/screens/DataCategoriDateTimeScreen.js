import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DateTimeContext } from "../hooks/DateTimeContext";
import { useContext } from "react";

const DataCategoriDateTimeScreen = () => {
  const context = useContext(DateTimeContext);
  const { dateContext, timeContext , category } = context;

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.textCategory}>Categoría</Text>
      <Text style={styles.text}>{category}</Text>
    </View>
    <View style={styles.container}>
    <Text style={styles.textCategory}>Fecha</Text>
      <Text style={styles.text}>{dateContext}</Text>
    </View>
    <View style={styles.container}>
    <Text style={styles.textCategory}>Horario</Text>
      <Text style={styles.text}>{timeContext}</Text>
    </View>
    </>
  );
};

export default DataCategoriDateTimeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#CAE9FF",   
  },
  text:{
    fontSize:20,
    textTransform:"uppercase"
  },
  textCategory:{
    fontSize:25,
    textTransform:"uppercase"
  }
})
