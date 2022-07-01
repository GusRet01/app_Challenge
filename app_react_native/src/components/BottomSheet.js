import React, { useRef, useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Calendar from "./Calendar";
import DropdownComp from "./DropdownComp";
import Time from "./Time";
import { useContext } from "react";
import { DateTimeContext } from "../hooks/DateTimeContext";

const BottomSheet = () => {
  const context = useContext(DateTimeContext);
  const { dateContext, timeContext } = context;
  const time = new Date();
  const hour = time.getHours() + ":" + time.getMinutes();
  const date =
    time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear();
  const refRBSheet = useRef();

  return (
    <>
      <View
        style={{
          flex: 0.3,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
          borderWidth: 1,
          borderColor: "red",
        }}
      >
        <Text>Challenge App React Native</Text>
      </View>

      <View
        style={{
          flex: 0.9,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
          borderWidth: 1,
          borderColor: "red",
        }}
      >
        <DropdownComp />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
          borderWidth: 1,
          borderColor: "red",
        }}
      >
        <TouchableOpacity
          style={styles.botton}
          onPress={() => refRBSheet.current.open()}
        >
          <Text style={styles.text}>{dateContext}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botton}
          onPress={() => refRBSheet.current.open()}
        >
          <Text style={styles.text}>{timeContext}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottonGo}>
          <Text style={styles.textGo}>ir</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1.6,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
          borderWidth: 1,
          borderColor: "red",
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
    borderRadius: 55,
    height: 55,
    width: 55,
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
});

export default BottomSheet;

// const BottomSheet = () => {
//     const refRBSheet = useRef();

//     return (
//       <>

//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "#fff",
//             marginHorizontal: 20,
//             borderWidth:1,
//             borderColor:"red",
//           }}
//         >
//           <TouchableOpacity
//             style={styles.botton}
//             onPress={() => refRBSheet.current.open()}
//           >
//             <Text style={styles.text}>Fecha</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.botton}
//             onPress={() => refRBSheet.current.open()}
//           >
//             <Text style={styles.text}>Hora</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.bottonGo}>
//             <Text style={styles.textGo}>ir</Text>
//           </TouchableOpacity>

//           <RBSheet
//             style={styles.sheet}
//             ref={refRBSheet}
//             closeOnDragDown={true}
//             closeOnPressMask={false}
//             customStyles={{
//               wrapper: {
//                 backgroundColor: "transparent",

//               },
//               container: {
//                 backgroundColor: "#5B5B5B",
//                 borderTopLeftRadius: 30,
//                 borderTopRightRadius: 30,
//               },
//               draggableIcon: {
//                 backgroundColor: "#002",
//               },
//             }}
//           >
//             <Text>Calendario</Text>
//           </RBSheet>
//         </View>
//       </>
//     );
//   };

//   const styles = StyleSheet.create({
//     botton: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       borderRadius: 50,
//       backgroundColor: "#D9D9D9",
//       height: 40,
//       width: 50,
//       margin: 10,
//     },
//     bottonGo: {
//       flex: 0.55,
//       justifyContent: "center",
//       alignItems: "center",
//       borderRadius: 55,
//       height: 55,
//       width: 55,
//       backgroundColor: "#5B5B5B",
//       margin: 10,
//     },
//     text: {
//       fontSize: 18,
//     },
//     textGo: {
//       fontSize: 24,
//       color: "#fff",
//     },
//   });

//   export default BottomSheet;
