import React, { useRef } from "react";
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from "./src/components/BottomSheet";

const App = () => {
  return (
    <>
      <BottomSheet />
      <StatusBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

// const App = () => {
//   const refRBSheet = useRef();

//   return (
//    <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#000",
//       }}
//     >
//       <Button title="OPEN BOTTOM" onPress={() => refRBSheet.current.open()} />
//       <RBSheet
//         ref={refRBSheet}
//         closeOnDragDown={true}
//         closeOnPressMask={false}
//         customStyles={{
//           wrapper: {
//             backgroundColor: "transparent",

//           },
//           draggableIcon: {
//             backgroundColor: "#000",
//           }
//         }}
//       >
//        <Text>SIU</Text>
//       </RBSheet>
//     </View>
//   );
// };

// export default App;
