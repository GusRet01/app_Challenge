import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DateTimeContext } from "../hooks/DateTimeContext";
import { useContext } from "react";

const DataCategoriDateTimeScreen = () => {
  const context = useContext(DateTimeContext);
  const { dateContext, timeContext } = context;
  return (
    <>
      <View>
        <Text>{dateContext}</Text>
      </View>
      <View>
        <Text>{timeContext}</Text>
      </View>
    </>
  );
};

export default DataCategoriDateTimeScreen;

const styles = StyleSheet.create({});
