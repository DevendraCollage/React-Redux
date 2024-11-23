import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state for the tasks
const initialState = {
  task: [],
  isLoading: false,
};

// Create a slice for tasks
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.task = state.task.filter((_, index) => index !== action.payload);
    },
    fetchTask: (state, action) => {
      state.task = [...state.task, ...action.payload];
    },
  },
});

// Export the action creators
export const { addTask, deleteTask, fetchTask } = taskSlice.actions;

// Configure the store
export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
});
