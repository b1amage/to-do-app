import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalInputHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    console.log("delete");
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((item) => item.id != id)
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onCancel={endAddGoalHandler}
          showModal={modalIsVisible}
          onAddGoal={addGoalInputHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={(item, index) => {
              return item.id;
            }}
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                  value={itemData.item.text}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
  // inputContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 24,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#ccc",
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   width: "70%",
  //   marginRight: 8,
  //   padding: 8,
  // },

  // goalItem: {
  //   margin: 8,
  //   padding: 8,
  //   borderRadius: 6,
  //   backgroundColor: "#5e0acc",
  // },
  // goalText: {
  //   color: "#fff",
  // },
});
