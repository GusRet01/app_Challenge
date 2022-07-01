import React, { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useContext } from "react";
import { DateTimeContext } from "../hooks/DateTimeContext";
import { AntDesign } from '@expo/vector-icons';

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
  const { dateContext, timeContext, toggleDateTime , category} = context;
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate
    ? selectedStartDate.format("DD/MM/YYYY").toString()
    : "";

  useEffect(() => {
    toggleDateTime(startDate, timeContext ,category);
  }, [selectedStartDate]);

  return (
    <>
      <View style={styles.contaniner}>
        <CalendarPicker
          onDateChange={setSelectedStartDate}
          weekdays={weekday}
          months={months}
          previousComponent={<AntDesign name="leftcircle" size={28} color="#fff" />}
          nextComponent={<AntDesign name="rightcircle" size={28} color="#fff" />}
          textStyle={styles.text}
          selectedDayColor="#CAE9FF"
          monthTitleStyle={styles.textMonthYear}
          yearTitleStyle={styles.textMonthYear}
        
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
    flex: 0.9,
  },
  textMonthYear:{
    fontSize:20,    
  }
});
export default Calendar;
