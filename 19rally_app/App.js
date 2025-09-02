import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TimeClockHub from "./components/TimeClockHub";
import CommunicationHub from "./components/CommunicationHub";
import OperationsHub from "./components/OperationsHub";
import ProfileHub from "./components/ProfileHub";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Time Clock") {
                iconName = focused ? "time" : "time-outline";
              } else if (route.name === "Chat") {
                iconName = focused ? "chatbubble" : "chatbubble-outline";
              } else if (route.name === "Operations") {
                iconName = focused ? "stats-chart" : "stats-chart-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "#666",
            tabBarStyle: { backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#eee" },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Time Clock" component={TimeClockHub} />
          <Tab.Screen name="Chat" component={CommunicationHub} />
          <Tab.Screen name="Operations" component={OperationsHub} />
          <Tab.Screen name="Profile" component={ProfileHub} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
