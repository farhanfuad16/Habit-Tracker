import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";
import styles from "./styles";

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);

  // Add a new habit to the list
  const handleAddHabit = (newHabit) => {
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  // Remove a habit by id
  const handleDeleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  // Mark a habit as completed for the day (progress +1, capped at the goal)
  const handleCompleteHabit = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id !== id || habit.completed) {
          return habit;
        }

        const updatedProgress = Math.min(habit.progress + 1, habit.dailyGoal);

        return {
          ...habit,
          progress: updatedProgress,
          completed: updatedProgress >= habit.dailyGoal,
        };
      })
    );
  };

  // Calculate summary stats across all habits
  const totalHabits = habits.length;
  const completedHabits = habits.filter((habit) => habit.completed).length;
  const overallCompletion =
    totalHabits === 0
      ? "0.00"
      : ((completedHabits / totalHabits) * 100).toFixed(2);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Habit Tracker</Text>
      <Text style={styles.subtitle}>Build better habits, one day at a time</Text>

      <View style={styles.summaryRow}>
        <View style={[styles.summaryCard, { borderTopColor: "#8B5CF6" }]}>
          <Text style={styles.summaryNumber}>{totalHabits}</Text>
          <Text style={styles.summaryLabel}>Total</Text>
        </View>

        <View style={[styles.summaryCard, { borderTopColor: "#34D399" }]}>
          <Text style={styles.summaryNumber}>{completedHabits}</Text>
          <Text style={styles.summaryLabel}>Completed</Text>
        </View>

        <View style={[styles.summaryCard, { borderTopColor: "#60A5FA" }]}>
          <Text style={styles.summaryNumber}>{overallCompletion}%</Text>
          <Text style={styles.summaryLabel}>Completion</Text>
        </View>
      </View>

      <HabitForm onAddHabit={handleAddHabit} />

      <HabitList
        habits={habits}
        onDeleteHabit={handleDeleteHabit}
        onCompleteHabit={handleCompleteHabit}
      />
    </ScrollView>
  );
}
