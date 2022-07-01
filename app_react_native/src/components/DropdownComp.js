import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Opción 1", value: "1" },
  { label: "Opción 2", value: "2" },
  { label: "Opción 3", value: "3" },
  { label: "Opción 4", value: "4" },
  { label: "Opción 5", value: "5" },
  { label: "Opción 6", value: "6" },
  { label: "Opción 7", value: "7" },
  { label: "Opción 8", value: "8" },
];

const DropdownComp = () => {
  const [value, setValue] = useState(null);

  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Elegí una categoría</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}     
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Seleccionar"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    // borderWidth: 1,
    // borderColor: "green",
    flex:1,
    margin:5
  },
  title: {
    fontSize: 18,
    textAlign:"center"
  },
  dropdown: {
    margin: 10,
    padding:10,
    height: 50,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DropdownComp;
