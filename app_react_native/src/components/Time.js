import {
  Button,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useContext } from "react";
import { DateTimeContext } from "../hooks/DateTimeContext";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const context = useContext(DateTimeContext);
  const { dateContext, timeContext, toggleDateTime } = context;
  const hora = date.getHours() + ":" + date.getMinutes();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  useEffect(() => {
    toggleDateTime(dateContext, hora);
  }, [date]);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.timeTexContainer}>
        <TouchableOpacity>
          <Text style={styles.checkOutTime}>Horario de salida</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.checkInTime}>Horario de Llegada</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.bottomTime} onPress={showTimepicker}>
        <Text style={styles.numTime}>{hora}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    borderColor: "green",
    flex: 0,
    justifyContent: "space-around",
    alignItems: "center",
    // margin: 5,
  },
  timeTexContainer: {
    // borderWidth: 0,
    // borderColor: "#8D8D8D",
    flex: 0,
    flexDirection: "row",
  },
  checkOutTime: {
    color: "#fff",
    fontSize: 17,
    borderBottomWidth: 2.5,
    borderColor: "#CAE9FF",
    paddingHorizontal: 12,
    paddingBottom: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  checkInTime: {
    color: "#fff",
    fontSize: 17,
    borderBottomWidth: 0.5,
    borderColor: "#CAE9FF",
    paddingHorizontal: 8,
    paddingBottom: 7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bottomTime: {
    margin: 2,
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#8D8D8D",
    padding: 0,
  },
  numTime: {
    color: "#8D8D8D",
    fontSize: 35,
    margin: 0,
    padding: 0,
    // borderWidth:1,
    // borderColor: "green",
  },
  textSearch: {
    color: "#8D8D8D",
    fontSize: 20,
    margin: 0,
    padding: 0,
    // borderWidth:1,
    // borderColor: "green",
  },
});
