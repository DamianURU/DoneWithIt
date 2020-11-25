import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default function Profile() {
  return (
    <TouchableOpacity>
      <Image
        style={styles.tinyLogo}
        source={{
          uri:
            "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png",
        }}
      />
    </TouchableOpacity>
  );
}
