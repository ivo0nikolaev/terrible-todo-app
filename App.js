// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import GoalInput from './components/GoalInput'
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals([...courseGoals, { id: Math.random().toString(), value: goalTitle}]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals( currentGoals => {
      return currentGoals.filter( (goal) => goal.id !== goalId)
    } );
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAdd={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={removeGoalHandler} id={itemData.item.id} title={itemData.item.value} />
        )}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 10,
  },

});
