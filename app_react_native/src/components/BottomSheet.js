import React, { useRef, useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Calendar from "./Calendar";
import DropdownComp from "./DropdownComp";
import Time from "./Time";
import { useContext } from "react";
import { DateTimeContext } from "../hooks/DateTimeContext";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const BottomSheet = () => {
  const context = useContext(DateTimeContext);
  const { dateContext, timeContext } = context;
  const time = new Date();
  const hour = time.getHours() + ":" + time.getMinutes();
  const date =
    time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear();
  const refRBSheet = useRef();
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 0,
          // borderWidth: 1,
          // borderColor: "red",
          backgroundColor: "#CAE9FF",
        }}
      >
        <Text>Challenge App React Native</Text>
      </View>

      <View
        style={{
          flex: 0,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
          marginVertical: 10,
          // borderWidth: 1,
          borderColor: "#CAE9FF",
          borderBottomWidth: 3,
        }}
      >
        <DropdownComp />
      </View>

      <Text style={styles.title}>Selecciona una fecha y hora</Text>
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginBottom:40,
          // borderWidth: 3,
          // borderColor: "red",
        }}
      >
        <TouchableOpacity
          style={styles.botton}
          onPress={() => refRBSheet.current.open()}
        >
          <Text style={styles.text}>
            {dateContext ? (
              <View style={styles.iconTextDate}>
                <MaterialIcons name="calendar-today" size={20} color="black" />
                <Text style={styles.dateText}>{dateContext}</Text>
              </View>
            ) : (
              <MaterialIcons name="calendar-today" size={24} color="black" />
            )}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botton}
          onPress={() => refRBSheet.current.open()}
        >
          <Text style={styles.text}>
            {timeContext ? (
              <View style={styles.iconTextDate}>
                <MaterialCommunityIcons
                  name="clock-time-three-outline"
                  size={24}
                  color="black"
                />
                <Text style={styles.timeText}>{timeContext}</Text>
              </View>
            ) : (
              <MaterialCommunityIcons
                name="clock-time-three-outline"
                size={24}
                color="black"
              />
            )}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottonGo}
          onPress={() => navigation.navigate("Datos")}
        >
          <Text style={styles.textGo}>ir</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1.6,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 0,
          // borderWidth: 2,
          borderColor: "red",
          backgroundColor: "#CAE9FF",
        }}
      ></View>

      <RBSheet
        style={styles.sheet}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          container: {
            backgroundColor: "#5B5B5B",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flex: 8,
          },
          draggableIcon: {
            backgroundColor: "#002",
          },
        }}
      >
        <Calendar />

        <Time />

        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.bottomSearch}
            onPress={() => refRBSheet.current.close()}
          >
            <Text style={styles.textSearch}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  botton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
    height: 40,
    width: 50,
    margin: 10,
  },
  bottonGo: {
    flex: 0.55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
    height: 60,
    width: 60,
    backgroundColor: "#5B5B5B",
    margin: 10,
  },
  text: {
    fontSize: 14,
  },
  textGo: {
    fontSize: 24,
    color: "#fff",
  },
  bottomSearch: {
    backgroundColor: "#CAE9FF",
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: "#8D8D8D",
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginTop:20,
    marginBottom:10,
  },
  iconTextDate: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: {
    marginLeft: 5,
  },
  timeText: {
    marginLeft: 10,
  },
});

export default BottomSheet;
