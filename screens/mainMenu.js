import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import Profile from "../components/profile";

export default function MainMenu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Profile></Profile>
      <Text>Main Menu</Text>
      <Button
        title="STANDARD"
        onPress={() => {
          /* 1. Navigate to the STANDARD route with params */
          navigation.navigate("STANDARD", {
            otherParam: "here goes game",
          });
        }}
      />
      <Button
        title="RUSH"
        onPress={() => {
          /* 1. Navigate to the STANDARD route with params */
          navigation.navigate("RUSH", {
            otherParam: "here goes game",
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 100,
  },
});
