import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

export default function StandardGame({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>LOREM IPSUM TU MAMA EN TAGNAGAN</Text>
      <Text>60</Text>
      <Button title="A" />
      <Button title="B" />
      <Button title="C" />
      <Button title="D" />
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate("Main Menu")}
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
