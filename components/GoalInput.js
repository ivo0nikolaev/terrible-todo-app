import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const Input = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };  

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Goals ..."
        style={styles.inputField}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add!" onPress={() => props.onAdd(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: 200,
    borderBottomColor: "black",
    borderWidth: 1,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 10,
  }
});

export default Input;
