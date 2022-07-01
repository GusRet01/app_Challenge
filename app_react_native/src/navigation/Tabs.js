import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import OptionMenuScreen from "../screens/OptionMenuScreen";
import DateTimeScreen from "../screens/DateTimeScreen";
import EmailScreen from "../screens/EmailScreen";
import DataCategoriDateTimeScreen from "../screens/DataCategoriDateTimeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const CalendarStack = createNativeStackNavigator();

function Stacknavigator() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="CalendarStack"
        component={DateTimeScreen}
        options={{
          headerShown: false,
        }}
      ></CalendarStack.Screen>
      <CalendarStack.Screen
        name="Datos"
        component={DataCategoriDateTimeScreen}
        options={{}}
      ></CalendarStack.Screen>
    </CalendarStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#72C3FF",
      }}
    >
      <Tab.Screen
        name="Menu"
        component={OptionMenuScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-menu-outline" size={24} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={24} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Stacknavigator}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <Octicons name="note" size={24} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Email"
        component={EmailScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="mail-outline" size={24} color={color} />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Tabs() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
