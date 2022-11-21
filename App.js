import { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// Import our component
import Navigator from "./src/navigations";
import ChatsScreen from "./src/screens/ChatScreen";
import ChatScreen from "./src/screens/ChatsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* render a ChatListItem */}
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",

  },
});