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
  const { dateContext, timeContext, toggleDateTime ,category } = context;
  const hour = date.getHours()
  const minute = + date.getMinutes();

  // Se agrego una corrección de la hora con los ceros por delante.
  const resultHour = hour < 10 ? "0" + hour : hour
  const resultMinute = minute < 10 ? "0" + minute : minute
  const hourTime = resultHour + ":" + resultMinute;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  useEffect(() => {
    toggleDateTime(dateContext, hourTime , category);
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
        <Text style={styles.numTime}>{hourTime}</Text>
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
    flex: 0,
    justifyContent: "space-around",
    alignItems: "center",
  },
  timeTexContainer: {
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
    marginTop: 20,
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
  },
  textSearch: {
    color: "#8D8D8D",
    fontSize: 20,
    margin: 0,
    padding: 0,
  },
});
