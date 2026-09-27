import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styles from "./styles";

// Categories available for selection
const CATEGORIES = ["Health", "Education", "Fitness", "Personal Development", "Other"];

export default function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  const [dailyGoal, setDailyGoal] = useState("");
  const [category, setCategory] = useState(null);
  const [error, setError] = useState("");

  const handleAddHabit = () => {
    // Validate habit name
    if (!habitName.trim()) {
      setError("Please enter a habit name.");
      return;
    }

    // Validate daily goal is a valid positive number
    const numericGoal = parseFloat(dailyGoal);
    if (isNaN(numericGoal) || numericGoal <= 0) {
      setError("Please enter a valid positive daily goal.");
      return;
    }

    // Validate category is selected
    if (!category) {
      setError("Please select a category.");
      return;
    }

    // Build the new habit object
    const newHabit = {
      id: Date.now().toString(),
      name: habitName.trim(),
      category,
      dailyGoal: numericGoal,
      progress: 0,
      completed: false,
    };

    onAddHabit(newHabit);

    // Reset the form
    setHabitName("");
    setDailyGoal("");
    setCategory(null);
    setError("");
  };

  return (
    <View style={styles.formCard}>
      <Text style={styles.sectionTitle}>Add a Habit</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Text style={styles.label}>Habit Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Read a book"
        placeholderTextColor="#5C5C74"
        value={habitName}
        onChangeText={setHabitName}
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setCategory(value)}
          value={category}
          placeholder={{ label: "Select a category...", value: null }}
          items={CATEGORIES.map((cat) => ({ label: cat, value: cat }))}
          style={{
            inputIOS: styles.picker,
            inputAndroid: styles.picker,
          }}
        />
      </View>

      <Text style={styles.label}>Daily Goal</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 1"
        placeholderTextColor="#5C5C74"
        value={dailyGoal}
        onChangeText={setDailyGoal}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddHabit}>
        <Text style={styles.addButtonText}>ADD HABIT</Text>
      </TouchableOpacity>
    </View>
  );
}
