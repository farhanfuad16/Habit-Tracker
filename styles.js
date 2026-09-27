import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // Main application container (dark background)
  container: {
    flex: 1,
    backgroundColor: "#0F0F1A",
  },

  // Scrollable content
  scrollContent: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },

  // App title
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#F5F5F7",
  },

  // App subtitle
  subtitle: {
    fontSize: 14,
    color: "#8A8AA3",
    marginTop: 4,
    marginBottom: 22,
  },

  // Row of summary stat cards
  summaryRow: {
    flexDirection: "row",
    marginBottom: 24,
    gap: 10,
  },

  // Individual summary stat card
  summaryCard: {
    flex: 1,
    backgroundColor: "#1C1C2E",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    borderTopWidth: 3,
  },

  // Summary number
  summaryNumber: {
    fontSize: 22,
    fontWeight: "800",
    color: "#F5F5F7",
  },

  // Summary label
  summaryLabel: {
    fontSize: 11,
    color: "#8A8AA3",
    marginTop: 4,
    textAlign: "center",
  },

  // Card wrapping the Add Habit form
  formCard: {
    backgroundColor: "#1C1C2E",
    borderRadius: 18,
    padding: 20,
    marginBottom: 26,
  },

  // Section headings ("Add a Habit" / "Your Habits")
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F5F5F7",
    marginBottom: 16,
  },

  // Input labels
  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#8A8AA3",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 6,
    marginTop: 14,
  },

  // Text input fields
  input: {
    backgroundColor: "#25253B",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#F5F5F7",
    borderWidth: 1,
    borderColor: "#33334D",
  },

  // Picker (category dropdown) wrapper
  pickerContainer: {
    backgroundColor: "#25253B",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#33334D",
    justifyContent: "center",
  },

  // Picker text
  picker: {
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 14,
    color: "#F5F5F7",
  },

  // Validation error text
  errorText: {
    color: "#F87171",
    fontSize: 13,
    marginBottom: 6,
  },

  // Add Habit pill button
  addButton: {
    backgroundColor: "#8B5CF6",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 22,
  },

  // Add Habit button text
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  // Empty state text
  emptyText: {
    textAlign: "center",
    color: "#8A8AA3",
    fontSize: 14,
    paddingVertical: 20,
  },

  // Individual habit card (row layout with colored left stripe)
  habitCard: {
    flexDirection: "row",
    backgroundColor: "#1C1C2E",
    borderRadius: 16,
    marginBottom: 12,
    overflow: "hidden",
  },

  // Colored accent stripe on the left of each habit card, color set per category
  habitStripe: {
    width: 5,
  },

  // Main content area of a habit card
  habitBody: {
    flex: 1,
    padding: 16,
  },

  // Top row: name/category on the left, actions on the right
  habitTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  // Habit name
  habitName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F5F5F7",
  },

  // Category label (colored, no background pill)
  habitCategory: {
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 4,
  },

  // Goal / progress fraction text
  habitMeta: {
    fontSize: 12,
    color: "#8A8AA3",
    marginTop: 8,
  },

  // Progress bar track
  progressTrack: {
    height: 6,
    backgroundColor: "#33334D",
    borderRadius: 6,
    marginTop: 10,
    overflow: "hidden",
  },

  // Progress bar fill, color set per category
  progressFill: {
    height: 6,
    borderRadius: 6,
  },

  // Column of action buttons on the right of a habit card
  habitActions: {
    alignItems: "flex-end",
  },

  // "Mark Done" pill button
  markDoneButton: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#25253B",
    borderWidth: 1,
    borderColor: "#8B5CF6",
  },

  // "Mark Done" button text
  markDoneText: {
    color: "#C4B5FD",
    fontSize: 11,
    fontWeight: "700",
  },

  // "Completed" badge shown once a habit is done
  completedBadge: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "rgba(52, 211, 153, 0.15)",
  },

  // "Completed" badge text
  completedText: {
    color: "#34D399",
    fontSize: 11,
    fontWeight: "700",
  },

  // Delete ("x") button
  deleteButton: {
    marginTop: 10,
    paddingHorizontal: 6,
  },

  // Delete button text
  deleteButtonText: {
    color: "#5C5C74",
    fontSize: 13,
    fontWeight: "700",
  },

});

export default styles;
