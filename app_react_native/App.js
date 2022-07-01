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
import DateTimeContextProvider from "./src/hooks/DateTimeContext";
import Tabs from "./src/navigation/Tabs";

const App = () => {
  return (
    <DateTimeContextProvider>
      <>
         <StatusBar />
        <Tabs/>
      </>
    </DateTimeContextProvider>
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

