import { createStore } from "redux";

/* eslint-disable no-case-declarations */
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
  isLoading: false,
};

// Step:1 Create simple reducer function
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updatedTask = state.task.filter((currTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};

// Step:2 Create the Redux store using the reducer
export const store = createStore(taskReducer);

// Step:3 Log the initial state
// The getState method is a synchronous function that returns the current state of a Redux application. It includes the entire state of the application, including all the reducers and their respective states.
console.log("initial state", store.getState());

// Step:5 Create action creators
export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

// Step:4 Dispatch an action to add a task
store.dispatch(addTask("Redux Code"));
console.log("updated state", store.getState());

store.dispatch(addTask("React Redux Code"));
console.log("updated state", store.getState());

store.dispatch(deleteTask(1));
console.log("deleted state", store.getState());
