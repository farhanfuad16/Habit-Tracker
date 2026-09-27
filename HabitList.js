import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

// Accent color per category, used for the left stripe, category label, and progress fill
const CATEGORY_COLORS = {
  Health: "#34D399",
  Education: "#60A5FA",
  Fitness: "#FB923C",
  "Personal Development": "#A78BFA",
  Other: "#94A3B8",
};

export default function HabitList({ habits, onDeleteHabit, onCompleteHabit }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Your Habits</Text>

      {habits.length === 0 ? (
        <Text style={styles.emptyText}>No habits added yet.</Text>
      ) : (
        habits.map((habit) => {
          // Percentage of the daily goal completed, capped at 100
          const percent = Math.min(
            Math.round((habit.progress / habit.dailyGoal) * 100),
            100
          );
          const accentColor = CATEGORY_COLORS[habit.category] || CATEGORY_COLORS.Other;

          return (
            <View key={habit.id} style={styles.habitCard}>
              <View style={[styles.habitStripe, { backgroundColor: accentColor }]} />

              <View style={styles.habitBody}>
                <View style={styles.habitTopRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.habitName}>{habit.name}</Text>
                    <Text style={[styles.habitCategory, { color: accentColor }]}>
                      {habit.category}
                    </Text>
                    <Text style={styles.habitMeta}>
                      {habit.progress}/{habit.dailyGoal} · {percent}%
                    </Text>
                  </View>

                  <View style={styles.habitActions}>
                    {habit.completed ? (
                      <View style={styles.completedBadge}>
                        <Text style={styles.completedText}>✓ Done</Text>
                      </View>
                    ) : (
                      <TouchableOpacity
                        style={styles.markDoneButton}
                        onPress={() => onCompleteHabit(habit.id)}
                      >
                        <Text style={styles.markDoneText}>Mark Done</Text>
                      </TouchableOpacity>
                    )}

                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => onDeleteHabit(habit.id)}
                    >
                      <Text style={styles.deleteButtonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${percent}%`, backgroundColor: accentColor },
                    ]}
                  />
                </View>
              </View>
            </View>
          );
        })
      )}
    </View>
  );
}
