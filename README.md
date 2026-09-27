# Habit Tracker

A simple habit-tracking app built with Expo, React Native, and React Native Web.

## Features

- Add habits with a name, category, and daily goal
- Track daily progress with a progress bar
- Mark habits as complete
- Remove habits from the list
- View total habits, completed habits, and completion percentage
- Responsive layout that can run on mobile and in a web browser

## Tech Stack

- Expo
- React 19
- React Native
- React Native Web
- `react-native-picker-select`

## Usage

1. Enter a habit name.
2. Select a category.
3. Enter a positive daily goal.
4. Select **ADD HABIT**.
5. Select **Mark Done** as you make progress.
6. Select **Remove** to delete a habit.

Habit data is currently stored in component state, so it resets when the app reloads.

## Project Structure

```text
.
├── App.js          # Application entry point
├── HabitTracker.js # Main tracker and summary state
├── HabitForm.js    # Form for creating habits
├── HabitList.js    # Habit cards and progress actions
├── styles.js       # Shared React Native styles
├── package.json    # Dependencies and project configuration
└── tsconfig.json   # TypeScript configuration for Expo
```

