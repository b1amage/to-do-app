import { StyleSheet, Text, View, Pressable } from "react-native";
const GoalItem = ({ value, onDeleteItem, id }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ffffff" }}
      onPress={onDeleteItem.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{value}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fff",
  },
});

export default GoalItem;
