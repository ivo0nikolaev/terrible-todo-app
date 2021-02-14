import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GaolItem = (props) => {
  return (
    <View style={styles.gaolItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gaolItem: {
    marginTop: 5,
    borderWidth: 2,
    backgroundColor: "#acacac",
  },
});

export default GaolItem;
