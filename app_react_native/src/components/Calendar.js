import React, { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useContext } from "react";
import { DateTimeContext } from "../hooks/DateTimeContext";

const weekday = ["D", "L", "M", "M", "J", "V", "S"];
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const Calendar = () => {
  const context = useContext(DateTimeContext);
  const { dateContext, timeContext, toggleDateTime } = context;

  console.log("date ---->>>", dateContext);
  console.log("time ---->>>", timeContext);

  // Calendario

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate
    ? selectedStartDate.format("DD/MM/YYYY").toString()
    : "";

  useEffect(() => {
    toggleDateTime(startDate, timeContext);
  }, [selectedStartDate]);

  console.log("selectedStartDate ->", selectedStartDate);

  return (
    <>
      <View style={styles.contaniner}>
        <CalendarPicker
          onDateChange={setSelectedStartDate}
          weekdays={weekday}
          months={months}
          previousTitle={"<"}
          nextTitle={">"}
          textStyle={styles.text}
          // scrollable={true}
          // horizontal={true}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  contaniner: {
    flex: 1.2,
    borderWidth: 1,
    borderColor: "red",
  },
});
export default Calendar;
