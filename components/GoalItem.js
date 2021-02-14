import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GaolItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.gaolItem}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
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
